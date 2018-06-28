import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'

@inject('store')
class LoadMoreButton extends PureComponent {
  static propTypes = {
    store: PropTypes.shape({
      todosStore: PropTypes.shape({}).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props)
    this.todosStore = props.store.todosStore;
  }

  handleLoadMore = () => {
    this.todosStore.loadTodos()
  }

  render() {
    return (
      <div className='d-f jc-c mT-30'>
        <button
          className='button button--hollow button--primary'
          onClick={this.handleLoadMore}
        >
          load more
        </button>
      </div>
    );
  }
}

export default LoadMoreButton;




