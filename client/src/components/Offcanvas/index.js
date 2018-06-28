import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { onKeyPairsPress } from 'services';
import { Close, TodoBody, NewBody } from './components';
import './index.scss'

@inject('store')
@observer
class Offcanvas extends Component {
  static propTypes = {
    store: PropTypes.shape({
      todosStore: PropTypes.shape({}).isRequired,
      offcanvasStore: PropTypes.shape({}).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props)
    this.offcanvasStore = props.store.offcanvasStore;
    this.todosStore = props.store.todosStore;
    this.state = {
      todo: {
        title: '',
        description: '',
      },
    };
  }

  componentDidMount() {
    onKeyPairsPress('Escape', undefined, () => {
      if (this.offcanvasStore.isOffcanvasShown)
        this.offcanvasStore.toggleOffcanvasVisibility();
    })
  }

  handleClose = () => {
    const {
      offcanvasStore,
    } = this;

    offcanvasStore.toggleOffcanvasVisibility();
    offcanvasStore.setOffcanvasNewMode(false);
  }

  handleTitleChange = event => {
    const { value } = event.target;

    this.setState(prevState => ({
      ...prevState,
      todo: {
        ...prevState.todo,
        title: value,
      },
    }));
  }

  handleDecriptionChange = event => {
    const { value } = event.target;

    this.setState(prevState => ({
      ...prevState,
      todo: {
        ...prevState.todo,
        description: value,
      },
    }));
  }

  handleSubmit = event => {
    event.preventDefault();

    const {
      state,
      todosStore,
    } = this;

    todosStore.createTodo(state.todo);

    this.handleClose();
  }

  switchViews = todo => {
    const {
      offcanvasStore,
    } = this;

    if (!offcanvasStore.isOffcanvasShown) return null;

    if (offcanvasStore.isOffcanvasNewMode) {
      return (
        <NewBody
          handleTitleChange={this.handleTitleChange}
          handleDecriptionChange={this.handleDecriptionChange}
          handleSubmit={this.handleSubmit}
          title={this.state.todo.title}
          description={this.state.todo.description}
        />
      )
    }

    return <TodoBody todo={todo} />
  }

  render() {
    const todo = this.todosStore.shownTodo;

    return (
      <div className={`offcanvas ${this.offcanvasStore.isOffcanvasShown ? 'offcanvas--is-open' : ''}`}>
        <div className='offcanvas__overlay' />
        <div className='offcanvas__body'>
          <div className="p-60 ov-a h-100p">
            {this.switchViews(todo)}
          </div>
          <Close handleClose={this.handleClose} />
        </div>
      </div>
    );
  }
}

export default Offcanvas;
