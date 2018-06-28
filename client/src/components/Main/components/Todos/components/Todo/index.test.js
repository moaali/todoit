import React from 'react'
import { Provider } from 'mobx-react';

import stores from 'stores';
import Todo from './'

const todo = {
  id: '1',
  completed: true,
  title: 'Todo Title',
  description: 'Todo description.',
  date: 'Jan 01, 2020',
}

const TodoComponent = () => (
  <Provider store={{...stores}}>
    <Todo todo={todo} />
  </Provider>
);

describe('Todo', () => {
  it('should match snapshot', () => {
    const component = mount(<TodoComponent />);
    expect(toJson(component)).toMatchSnapshot();
  })
})
