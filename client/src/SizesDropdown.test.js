import React from 'react';
import { shallow } from 'enzyme';
import SizesDropdown from './SizesDropdown.js';


it("renders Sizes phrase ", () => {
    const wrapper = shallow(<SizesDropdown />);
    const sizesDropdown = "Select Size";
    expect(wrapper.contains(sizesDropdown)).toEqual(true);
})
describe('Sizes button ', () => {
    const wrapper = shallow(<SizesDropdown sizes={[]} />);
    const menuButton = wrapper.find('.button');

    it('Sizes button exists', () => {
        expect(menuButton.exists()).toBe(true);
    });
    it('showMenu method changes showMenu state to true', () => {
        wrapper.setState({
        showMenu: false,
        amount: [],
        size: null,
        sizes: [1, 2, 4]
        });
        menuButton.simulate('click', {
        preventDefault() { }
        });
        wrapper.instance().forceUpdate();
        expect(wrapper.state('showMenu')).toEqual(true);
    });
});