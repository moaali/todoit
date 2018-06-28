import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'

import { Checkbox, Controls, EditBody, ViewBody } from './components'
import './index.scss';

@inject('store')
class Todo extends PureComponent {
  static propTypes = {
    store: PropTypes.shape({
      offcanvasStore: PropTypes.shape({}).isRequired,
      todosStore: PropTypes.shape({}).isRequired,
    }).isRequired,
    todo: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props);

    this.todosStore = props.store.todosStore;
    this.offcanvasStore = props.store.offcanvasStore;
    this.state = {
      isEditMode: false,
      todo: props.todo,
    }
  }

  handleCheck = event => {
    this.todosStore.updateTodo({
      ...this.state.todo,
      completed: event.target.checked,
    })

    this.setState(prevState => ({
      ...prevState,
      todo: {
        ...prevState.todo,
        completed: !prevState.todo.completed,
      },
    }));
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

  handleEditMode = () => {
    this.setState(prevState => ({
      isEditMode: !prevState.isEditMode,
    }));
  }

  handleView = () => {
    this.todosStore.viewTodo(this.state.todo.id);
    this.offcanvasStore.toggleOffcanvasVisibility();
  }

  renderBody = todo => {
    if (this.state.isEditMode) {
      return (
        <EditBody
          handleTitleChange={this.handleTitleChange}
          handleDecriptionChange={this.handleDecriptionChange}
          todo={todo}
        />
      );
    }

    return <ViewBody todo={todo} />
  }

  render() {
    const { todo, isEditMode } = this.state;

    return (
      <div className={`todo ${todo.completed ? 'todo--is-completed' : ''}`}>
        <div className="peers jc-sb w-100p">
          <div className="peer">
            <Checkbox todo={todo} handleCheck={this.handleCheck} />
          </div>
          <div className="peer">
            <Controls
              isEditMode={isEditMode}
              handleEditMode={this.handleEditMode}
              handleView={this.handleView}
              todo={todo}
            />
          </div>
        </div>
        <div className='w-100p'>
          <div className='mT-40'>
            { this.renderBody(todo) }
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
