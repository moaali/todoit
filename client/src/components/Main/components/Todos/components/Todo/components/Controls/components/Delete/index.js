import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip';
import { inject } from 'mobx-react'

@inject('store')
class Delete extends PureComponent {
  static propTypes = {
    store: PropTypes.shape({
      todosStore: PropTypes.shape({}).isRequired,
    }).isRequired,
    todo: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props);

    this.todosStore = props.store.todosStore;
    this.state = {
      todo: props.todo,
    }
  }

  handleDelete = event => {
    event.preventDefault();

    const {
      todosStore,
    } = this;

    todosStore.deleteTodo(this.state.todo.id);
  }

  render() {
    const { todo } = this.props;

    return (
      <li className="peer todo-controls__item">
        <a
          href="#"
          data-tip
          data-for={`controls__control-tip-delete-${todo.id}`}
          className='fa fa-trash todo-controls__icon'
          onClick={this.handleDelete}
        >
          {' '}
        </a>
        <ReactTooltip id={`controls__control-tip-delete-${todo.id}`} effect='solid'>
          <span>Delete Todo</span>
        </ReactTooltip>
      </li>
    );
  }
}

export default Delete;
