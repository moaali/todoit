import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const KeyboardItem = ({ className, ...restProps }) => (
  <Fragment>
    <button className={`bgc-transparent bdw-0 ${className}`} {...restProps}>
      <i className='fa fa-keyboard-o' />
    </button>
    <ul className='dropdown'>
      <li className='dropdown__item'>
        <a className='dropdown__link dropdown__link--disabled'>
          <div className='dropdown__group'>
            <div className='fa fa-dedent fsz-lg dropdown__icon' />
            <div className='dropdown__text'>Toggle Sidebar</div>
          </div>
          <div className='dropdown__group'>
            <div className='dropdown__addon'>
              <code>
                ctrl+b
              </code>
            </div>
          </div>
        </a>
      </li>
      <li className='dropdown__item'>
        <a className='dropdown__link dropdown__link--disabled'>
          <div className='dropdown__group'>
            <div className='fa fa-times-circle fsz-lg dropdown__icon' />
            <div className='dropdown__text'>Close Offcanvas</div>
          </div>
          <div className='dropdown__group'>
            <div className='dropdown__addon'>
              <code>
                Esc
              </code>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </Fragment>
);

KeyboardItem.defaultProps = {
  className: '',
};

KeyboardItem.propTypes ={
  className: PropTypes.string,
};

export default KeyboardItem;
