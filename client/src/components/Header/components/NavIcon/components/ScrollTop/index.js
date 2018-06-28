import React, { PureComponent } from 'react'
import ReactTooltip from 'react-tooltip';

class ScrollTop extends PureComponent {
  handleClick = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <button
          className='bgc-transparent bdw-0'
          onClick={this.handleClick}
          data-tip
          data-for='scrolltop__tip'
        >
          <i className='fa fa-arrow-circle-up' />
        </button>
        <ReactTooltip id='scrolltop__tip' effect='solid'>
          <span className='whs-nw'>Scroll Top</span>
        </ReactTooltip>
      </>
    );
  }
}

export default ScrollTop;
