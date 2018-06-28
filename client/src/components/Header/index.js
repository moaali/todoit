import React from 'react'
import PropTypes from 'prop-types'

import { Logo, NavIcon, HeaderSearch } from './components';
import './index.scss'

const Header = ({ className, ...restProps }) => (
  <div className={`peers header ${className}`} {...restProps}>
    <div className='peer'>
      <Logo />
    </div>
    <div className='peers peer-greed jc-c'>
      <HeaderSearch />
    </div>
    <div className='peer'>
      <NavIcon />
    </div>
  </div>
);

Header.defaultProps = {
  className: '',
}

Header.propTypes = {
  className: PropTypes.string,
}
export default Header;
