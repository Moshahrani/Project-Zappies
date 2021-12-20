import React from 'react';
import { shallow } from 'enzyme';
import SizesDropdown from './SizesDropdown.jsx';


it("renders Quantity ", () => {
    const wrapper = shallow(<SizesDropdown />);
    const sizesDropdown = "Sizes";
    expect(wrapper.contains(sizesDropdown)).toEqual(true);
})