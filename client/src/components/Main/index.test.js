import React from 'react';

import Main from './';

describe('Main', () => {
  it('should match snapshot', () => {
    const mainElement = shallow(<Main />);
    expect(toJson(mainElement)).toMatchSnapshot();
  })
})
