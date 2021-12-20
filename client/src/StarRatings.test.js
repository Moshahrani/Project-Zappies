import React from 'react';
import { shallow } from 'enzyme';
import StarRatings from './StarRatings.jsx';


it("renders Quantity ", () => {
    const wrapper = shallow(<StarRatings />);
    const starRatings = "Stars";
    expect(wrapper.contains(starRatings)).toEqual(true);
})