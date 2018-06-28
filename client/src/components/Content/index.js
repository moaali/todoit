import React from 'react'
import PropTypes from 'prop-types'
import { Sidebar, Main, Offcanvas, AddButton } from 'components';

const Content = ({ className, ...restProps }) => (
  <section className={`peers fxw-nw content ${className}`} {...restProps}>
    <div className="peer">
      <Sidebar />
    </div>
    <div className="peer peer-greed">
      <Main />
    </div>
    <div className="peer">
      <Offcanvas />
    </div>
    <AddButton />
  </section>
);

Content.defaultProps = {
  className: '',
}

Content.propTypes = {
  className: PropTypes.string,
}
export default Content;
