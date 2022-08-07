import React from 'react';
import { shallow } from 'enzyme';
import StarRatings from './StarRatings.js';

it("renders without issues" , () => {
    const wrapper = shallow(<StarRatings />);
    expect(wrapper.exists()).toBe(true);
});



