import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'

@inject('store')
class FilterCompleted extends PureComponent {
  static propTypes = {
    store: PropTypes.shape({
      todosStore: PropTypes.shape({}).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props)
    this.todosStore = props.store.todosStore;
    this.state = {
      isCompletedHidden: false,
    };
  }

  handleCheck = () => {
    const {
      todosStore,
      state,
    } = this;

    this.setState(prevState => ({
      ...prevState,
      isCompletedHidden: !prevState.isCompletedHidden,
    }));

    if (!state.isCompletedHidden) {
      todosStore.toggleCompleted(false);
    } else {
      todosStore.toggleCompleted(null);
    }
  }

  render() {
    return (
      <label
        className='checkbox checkbox--with-label'
        htmlFor='checkbox__input-hide-completed'
      > <span>Hide Completed</span>
        <input
          id='checkbox__input-hide-completed'
          type='checkbox'
          checked={this.state.isCompletedHidden}
          className='checkbox__input'
          onChange={this.handleCheck}
        />
        <span className='checkbox__checkmark' />
      </label>
    );
  }
}

export default FilterCompleted;


