import React from 'react'

import Badge from './'

describe('Badge', () => {
  it('should match snapshot', () => {
    const badgeElement = shallow(<Badge content={1} />);
    expect(toJson(badgeElement)).toMatchSnapshot();
  })
})
