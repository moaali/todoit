import React from 'react';

import Content from './';

describe('Content', () => {
  it('should match snapshot', () => {
    const contentElement = shallow(<Content />);
    expect(toJson(contentElement)).toMatchSnapshot();
  });
})
