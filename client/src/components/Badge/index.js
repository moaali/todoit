import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const Badge = ({ className, content, ...restProps }) => (
  <span
    className={`badge ${className}`}
    {...restProps}
  >
    {content}
  </span>
);

Badge.defaultProps = {
  className: '',
}

Badge.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
}

export default Badge;
