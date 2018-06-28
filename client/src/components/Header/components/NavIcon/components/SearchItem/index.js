import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class SearchItem extends Component {
  static propTypes = {
    store: PropTypes.shape({
      searchStore: PropTypes.shape({}).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.searchStore = this.props.store.searchStore;
  }

  handleClick = e => {
    e.preventDefault();
    this.searchStore.toggleSearchBarVisibility();
  }

  render() {
    return (
      <button className='bgc-transparent bdw-0' onClick={this.handleClick}>
        <i className='fa fa-search' />
      </button>
    );
  }
}

export default SearchItem;
