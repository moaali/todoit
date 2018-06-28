import React, { PureComponent } from 'react';
import { Header, Content } from 'components';

class Index extends PureComponent {
  render() {
    return (
      <div id='page'>
        <Header />
        <Content />
      </div>
    )
  }
}

export default Index;
