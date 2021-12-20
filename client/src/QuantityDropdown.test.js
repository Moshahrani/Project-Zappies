import React from 'react';
import { shallow } from 'enzyme';
import QuantityDropdown from './QuantityDropdown.jsx';


it("renders Quantity ", () => {
    const wrapper = shallow(<QuantityDropdown />);
    const quantityDisplay = "Quantity";
    expect(wrapper.contains(quantityDisplay)).toEqual(true);
})