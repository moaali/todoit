import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { truncate } from 'lodash';

class ViewBody extends PureComponent {
  static propTypes = {
    todo: PropTypes.shape({}).isRequired,
  }

  render() {
    const { todo } = this.props;

    return (
      <>
        <i className='op-50p'>{todo.date}</i>
        <h2 className='mB-20 mT-10 tt-c'>
          {truncate(todo.title, { length: 50 })}
        </h2>
        <p>
          {truncate(todo.description, { length: 120 })}
        </p>
      </>
    );
  }
}

export default ViewBody;
