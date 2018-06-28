import React from 'react'
import {
  RequestStatusIndicator,
  KeyboardItem,
  SearchItem,
  ScrollTop,
} from './components';

const NavIcon = () => (
  <div className='peers ai-c'>
    <div className="peer ai-c mR-10 mR-20@sm+ pos-r">
      <RequestStatusIndicator />
    </div>
    <div className="peer mR-10 mR-20@sm+ pos-r d-n@lg+">
      <SearchItem />
    </div>
    <div className="peer mR-20@sm+ pos-r d-n@lg- dropdown-container">
      <KeyboardItem />
    </div>
    <div className="peer pos-r">
      <ScrollTop />
    </div>
  </div>
);

export default NavIcon;
