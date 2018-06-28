import React from 'react'

import { FilterCompleted, Title } from './components';

const Header = () => (
  <div className='peers ai-c jc-sb fxw-nw mB-30'>
    <div className="peer">
      <Title />
    </div>
    <div className="peer">
      <FilterCompleted />
    </div>
  </div>
);

export default Header;
