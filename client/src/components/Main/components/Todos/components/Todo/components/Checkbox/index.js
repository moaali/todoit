import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'

@inject('store')
class Checkbox extends PureComponent {
  static propTypes = {
    store: PropTypes.shape({
      todosStore: PropTypes.shape({}).isRequired,
    }).isRequired,
    todo: PropTypes.shape({}).isRequired,
    handleCheck: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.todosStore = props.store.todosStore;
  }

  render() {
    const { todo } = this.props;

    return (
      <label
        className='checkbox checkbox--big'
        htmlFor={`checkbox__input-${todo.id}`}
      >
        <input
          id={`checkbox__input-${todo.id}`}
          type='checkbox'
          defaultChecked={todo.completed}
          className='checkbox__input'
          onChange={this.props.handleCheck}
        />
        <span className='checkbox__checkmark' />
      </label>
    );
  }
}

export default Checkbox;
