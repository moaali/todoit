import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'

import './index.scss'

@inject('store')
class Close extends Component {
  static propTypes = {
    store: PropTypes.shape({
      sidebarStore: PropTypes.shape({}).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props)
    this.sidebarStore = this.props.store.sidebarStore;
  }

  handleClick = event => {
    event.preventDefault();
    this.sidebarStore.toggleSidebarVisibility();
  }

  render() {
    return (
      <button className='sidebar__dismiss' onClick={this.handleClick}>
        <i className="fa fa-close fsz-lg" />
      </button>
    );
  }
}

export default Close;
