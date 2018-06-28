import React, { PureComponent } from 'react'

import { Categories, Close } from './components'
import './index.scss'

class Sidebar extends PureComponent {
  render() {
    return (
      <aside className='sidebar'>
        <Close />
        <div className='sidebar__wrapper'>
          <div className='sidebar__content'>
            <Categories />
          </div>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
