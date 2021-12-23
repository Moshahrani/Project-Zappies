import React from 'react';
import { shallow } from 'enzyme';
import ColorsDropdown from './ColorsDropdown.jsx';


it("renders Colors Component without any issues", () => {
    const wrapper = shallow(<ColorsDropdown />);
    expect(wrapper.exists()).toBe(true);
});

it("renders Colors ", () => {
    const wrapper = shallow(<ColorsDropdown />);
    const colorsDisplay = "Colors";
    expect(wrapper.contains(colorsDisplay)).toEqual(true);
});