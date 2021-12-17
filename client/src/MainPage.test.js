import React from 'react';
import { shallow } from 'enzyme';

import MainPage from './MainPage';

describe('MainPage first test', () => {
  it('should have a header tag with Main Page', () => {
    const wrapper = shallow(<MainPage />);
    expect(wrapper.find('h1').text()).toEqual('Main Page');
  });
});
