import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LogoImage from 'images/logo.png'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Logo extends Component {
  static propTypes = {
    store: PropTypes.shape({
      sidebarStore: PropTypes.shape({}).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props)
    this.sidebarStore = this.props.store.sidebarStore;
  }

  handleClick = () => {
    this.sidebarStore.toggleSidebarVisibility();
  }

  render() {
    const hideClass = this.sidebarStore.isSidebarShown ? 'd-n' : '';

    return (
      <div className='peers ai-c'>
        <button className={`peer bgc-transparent bdw-0 mR-10 ${hideClass}`} onClick={this.handleClick}>
          <i className='fa fa-bars' />
        </button>
        <img className='peer' src={LogoImage} alt='Todo' />
      </div>
    );
  }
}

export default Logo;
