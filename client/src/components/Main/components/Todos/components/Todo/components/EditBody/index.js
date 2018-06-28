import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class EditBody extends PureComponent {
  static propTypes = {
    todo: PropTypes.shape({}).isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    handleDecriptionChange: PropTypes.func.isRequired,
  }

  handleTitleChange = event => {
    this.props.handleTitleChange(event);
  }

  handleDecriptionChange = event => {
    this.props.handleDecriptionChange(event);
  }

  render() {
    const { todo } = this.props;

    return (
      <form>
        <input
          type="text"
          className='control w-100p mB-15'
          name='123'
          value={todo.title}
          onChange={this.handleTitleChange}
        />
        <textarea
          className='control w-100p pY-15'
          name='1234'
          style={{ resize: 'none', height: 'auto', borderRadius: '10px' }}
          rows='8'
          value={todo.description}
          onChange={this.handleDecriptionChange}
        />
      </form>
    );
  }
}

export default EditBody;
