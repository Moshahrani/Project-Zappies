import React from 'react';
import { shallow } from 'enzyme';
import QuantityDropdown from './QuantityDropdown.jsx';


it("renders Quantity ", () => {
    const wrapper = shallow(<QuantityDropdown />);
    const colorsDisplay = "Quantity";
    expect(wrapper.contains(colorsDisplay)).toEqual(true);
})