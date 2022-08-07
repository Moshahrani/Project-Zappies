import React from 'react';
import { shallow } from 'enzyme';
import QuantityDropdown from './QuantityDropdown.js';


it("renders Quantity Component without any issues" , () => {
    const wrapper = shallow(<QuantityDropdown />);
    expect(wrapper.exists()).toBe(true);
});

it("renders Quantity text", () => {
    const wrapper = shallow(<QuantityDropdown />);
    const quantityDisplay = "Quantity";
    expect(wrapper.contains(quantityDisplay)).toEqual(true);
});

describe('Quantity button ', () => {
    const wrapper = shallow(<QuantityDropdown colors={[]} />);
    const menuButton = wrapper.find('.button');

    it('Quantity button exists', () => {
        expect(menuButton.exists()).toBe(true);
    });
    it('showMenu method changes showMenu state to true', () => {
        wrapper.setState({
        showMenu: false,
        amount: [],
        size: null
        });
        menuButton.simulate('click', {
        preventDefault() { }
        });
        wrapper.instance().forceUpdate();
        expect(wrapper.state('showMenu')).toEqual(true);
        //console.log(wrapper.debug());
    });
});