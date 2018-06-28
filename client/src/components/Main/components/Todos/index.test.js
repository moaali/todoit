import React from 'react'
import { Provider } from 'mobx-react';

import stores from 'stores';
import Todos from './'

const TodosComponent = () => (
  <Provider store={{...stores}}>
    <Todos />
  </Provider>
);

describe('Todos', () => {
  it('should match snapshot', () => {
    const component = mount(<TodosComponent />);
    expect(toJson(component)).toMatchSnapshot();
  })
})
