import React from 'react';
import { shallow } from 'enzyme';
import QuantityDropdown from './QuantityDropdown.jsx';


it("renders Quantity Component without any issues" , () => {
    const wrapper = shallow(<QuantityDropdown />);
    expect(wrapper.exists()).toBe(true);
});

it("renders Quantity ", () => {
    const wrapper = shallow(<QuantityDropdown />);
    const quantityDisplay = "Quantity";
    expect(wrapper.contains(quantityDisplay)).toEqual(true);
});
