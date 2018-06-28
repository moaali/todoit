import React from 'react'
import { Provider } from 'mobx-react'

import stores from 'stores'
import Root from './'

const RootComponent = () => (
  <Provider store={{...stores}}>
    <Root />
  </Provider>
);

describe('Root', () => {
  it('should match snapshot', () => {
    const rootElement = shallow(<RootComponent />);
    expect(toJson(rootElement)).toMatchSnapshot();
  })
})
