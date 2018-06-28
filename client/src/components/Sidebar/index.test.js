import React from 'react';
import { Provider } from 'mobx-react';

import stores from 'stores';
import Sidebar from './';

const SidebarComponent = () => (
  <Provider store={{...stores}}>
    <Sidebar />
  </Provider>
);

describe('Sidebar', () => {
  it('should match snapshot', () => {
    const compnent = mount(<SidebarComponent />);
    expect(toJson(compnent)).toMatchSnapshot();
  })
})
