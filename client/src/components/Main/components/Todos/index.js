import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { Todo } from './components';

@inject('store')
@observer
class Todos extends Component {
  static propTypes = {
    store: PropTypes.shape({
      todosStore: PropTypes.shape({}).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.todosStore = props.store.todosStore;
  }

  renderTodos = () => (
    this.todosStore.displayedTodos.map(
      todo => <Todo key={todo.id} todo={todo} />
    )
  )

  render() {
    return (
      <div className='todos'>{this.renderTodos()}</div>
    );
  }
}

export default Todos;
