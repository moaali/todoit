import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class RequestStatusIndicator extends Component {
  static propTypes = {
    store: PropTypes.shape({
      todosStore: PropTypes.shape({
        requestStatus: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.todosStore = this.props.store.todosStore;
  }

  renderIcons = () => {
    const {
      todosStore,
    } = this;

    const PendingIcon = <i className='fa fa-repeat c-primary' />;
    const SuccessIcon = <i className='fa fa-check c-success' />;
    const ErrorIcon = <i className='fa fa-times-circle c-danger' />;
    const WarningIcon = <i className='fa fa-warning c-warning' />;

    if (todosStore.requestStatus === 'pending') return PendingIcon;
    if (todosStore.requestStatus === 'success') return SuccessIcon;
    if (todosStore.requestStatus === 'error') return ErrorIcon;
    return WarningIcon;
  }

  render() {
    return this.renderIcons();
  }
}
export default RequestStatusIndicator;
