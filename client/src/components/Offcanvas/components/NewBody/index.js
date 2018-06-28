import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class NewBody extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    handleDecriptionChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render() {
    return (
      <form action='' onSubmit={this.props.handleSubmit}>
        <h2 className='mB-30'>Add New Todo</h2>
        <input
          type="text"
          className='control w-100p mB-15'
          placeholder='Todo title'
          value={this.props.title}
          onChange={this.props.handleTitleChange}
        />
        <textarea
          className='control w-100p pY-15 mB-15'
          style={{ resize: 'none', height: 'auto', borderRadius: '10px' }}
          placeholder='Todo description'
          rows='15'
          value={this.props.description}
          onChange={this.props.handleDecriptionChange}
        />
        <input
          type="submit"
          className='button button--primary'
          value='Save Todo'
        />
      </form>
    );
  }
}

export default NewBody;
