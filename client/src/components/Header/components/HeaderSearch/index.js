import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import './index.scss'

@inject('store')
@observer
class HeaderSearch extends Component {
  static propTypes = {
    store: PropTypes.shape({
      searchStore: PropTypes.shape({}).isRequired,
      todosStore: PropTypes.shape({}).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.searchStore = props.store.searchStore;
    this.todosStore = props.store.todosStore;
  }

  handleClick = e => {
    e.preventDefault();
    this.searchStore.toggleSearchBarVisibility();
  }

  handleSearch = event => {
    const { value } = event.target;
    const {
      todosStore,
    } = this;

    todosStore.fuzzyfind(value);
  }

  render() {
    const searchClass = this.searchStore.isSearchBarShown ? 'search-bar--open' : 'search-bar--closed';

    return (
      <div className={`search-bar w-50p@md+ peers fxw-nw jc-c ai-c ${searchClass}`}>
        <div className='peer peer-greed'>
          <input
            type='text'
            className='control w-100p'
            placeholder='Fuzzy finder...'
            onChange={this.handleSearch}
          />
        </div>
        <div className='peer d-n@lg+'>
          <button className='bgc-transparent bdw-0' onClick={this.handleClick}>
            <i className='fa fa-times-circle' />
          </button>
        </div>
      </div>
    );
  }
}

export default HeaderSearch;
