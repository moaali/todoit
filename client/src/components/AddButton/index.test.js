import React from 'react'
import { Provider } from 'mobx-react'

import stores from 'stores'
import AddButton from './'

const AddButtonComponent = () => (
  <Provider store={{...stores}}>
    <AddButton />
  </Provider>
);

describe('AddButton', () => {
  it('should match snapshot', () => {
    const addButtonElement = shallow(<AddButtonComponent />);
    expect(toJson(addButtonElement)).toMatchSnapshot();
  })

  it('mount successfully and has `.fa` element', () => {
    const addButtonElement = mount(<AddButtonComponent />);
    expect(addButtonElement.find('.fa')).toHaveLength(1);
  })
})
