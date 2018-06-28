import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Close extends PureComponent {
  static propTypes = {
    handleClose: PropTypes.func.isRequired,
  }

  render() {
    return (
      <button onClick={this.props.handleClose} className='offcanvas__dismiss'>
        <i className="fa fa-close" />
      </button>
    );
  }
}

export default Close;
