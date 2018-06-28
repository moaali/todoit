import React from 'react';
import { Provider } from 'mobx-react';

import stores from 'stores';
import Offcanvas from './';

const OffcanvasComponent = () => (
  <Provider store={{...stores}}>
    <Offcanvas />
  </Provider>
);

describe('Offcanvas', () => {
  it('should match snapshot', () => {
    const component = mount(<OffcanvasComponent />);
    expect(toJson(component)).toMatchSnapshot();
  })

  it('should have `.offcanvas__body` element', () => {
    const component = mount(<OffcanvasComponent />);
    expect(component.find('.offcanvas__body')).toHaveLength(1);
  })
})
