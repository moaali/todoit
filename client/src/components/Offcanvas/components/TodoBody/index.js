import React from 'react';
import PropTypes from 'prop-types';

const TodoBody = ({ todo }) => (
  <>
    <i className='op-50p'>{todo && todo.date}</i>
    <h2 className='mB-20 mT-10 tt-c'>{todo && todo.title}</h2>
    <p>{todo && todo.description}</p>
  </>
);

TodoBody.propTypes = {
  todo: PropTypes.shape({}).isRequired,
};

export default TodoBody;
