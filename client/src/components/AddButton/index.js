import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'

@inject('store')
class AddButton extends PureComponent {
  static propTypes = {
    store: PropTypes.shape({
      offcanvasStore: PropTypes.shape({}).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props)
    this.offcanvasStore = this.props.store.offcanvasStore;
  }

  handleClick = () => {
    const {
      offcanvasStore,
    } = this;

    offcanvasStore.toggleOffcanvasVisibility();
    offcanvasStore.setOffcanvasNewMode(true);
  }

  render() {
    return (
      <button
        className='button button--primary button--rounded pos-f b-30 r-30 z-9'
        onClick={this.handleClick}
      >
        <i className="pos-f fa fa-plus" />
      </button>
    );
  }
}

export default AddButton;
