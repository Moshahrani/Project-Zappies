import React from 'react';
import { shallow } from 'enzyme';
import StarRatings from './StarRatings.jsx';

it("renders without issues" , () => {
    const wrapper = shallow(<StarRatings />);
    expect(wrapper.exists()).toBe(true);
});

it("renders Stars Phrase ", () => {
    const wrapper = shallow(<StarRatings />);
    const starRatings = "Stars";
    expect(wrapper.contains(starRatings)).toEqual(true);
})


