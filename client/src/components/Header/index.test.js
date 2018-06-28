import React from 'react'

import Header from './'

describe('Header', () => {
  it('should match snapshot', () => {
    const contentElement = shallow(<Header />);
    expect(toJson(contentElement)).toMatchSnapshot();
  })
})
