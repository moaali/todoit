import React, { PureComponent } from 'react'

import { Todos, Header, LoadMoreButton } from './components'
import './index.scss'

class Main extends PureComponent {
  render() {
    return (
      <div id='main' className='main'>
        <Header />
        <Todos />
        <LoadMoreButton />
      </div>
    )
  }
}

export default Main;
