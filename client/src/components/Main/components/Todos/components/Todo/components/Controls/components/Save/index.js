import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip';
import { inject } from 'mobx-react'

@inject('store')
class Save extends PureComponent {
  static propTypes = {
    store: PropTypes.shape({
      todosStore: PropTypes.shape({}).isRequired,
    }).isRequired,
    todo: PropTypes.shape({}).isRequired,
    handleEditMode: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.todosStore = props.store.todosStore;
  }

  handleSave = event => {
    event.preventDefault();

    const {
      props,
      todosStore,
    } = this;

    todosStore.updateTodo(props.todo);

    this.props.handleEditMode();
  }

  render() {
    const { todo } = this.props;

    return (
      <li className="peer mL-10 todo-controls__item">
        <a
          href="#"
          data-tip
          data-for={`controls__control-tip-save-${todo.id}`}
          className='fa fa-save todo-controls__icon c-primary'
          onClick={this.handleSave}
        >
          {' '}
        </a>
        <ReactTooltip id={`controls__control-tip-save-${todo.id}`} effect='solid'>
          <span>Save Todo</span>
        </ReactTooltip>
      </li>
    );
  }
}

export default Save;
