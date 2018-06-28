import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { onKeyPairsPress } from 'services';

@inject('store')
@observer
class Root extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    store: PropTypes.shape({
      sidebarStore: PropTypes.shape({}).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props)
    this.sidebarStore = this.props.store.sidebarStore;
  }

  componentDidMount() {
    onKeyPairsPress('b', { ctrlKey: true }, () => {
      this.sidebarStore.toggleSidebarVisibility();
    })
  }

  render() {
    const { children } = this.props;
    const layoutClass = this.sidebarStore.isSidebarShown ? '' : 'collapsed';

    return (
      <div className={layoutClass}>{children}</div>
    );
  }
}

export default Root;
