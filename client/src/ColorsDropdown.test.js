import React from 'react';
import { shallow, mount } from 'enzyme';
import ColorsDropdown from './ColorsDropdown.jsx';

it('renders Colors Component without any issues', () => {
    const wrapper = shallow(<ColorsDropdown />);
    expect(wrapper.exists()).toBe(true);
});

it('renders Colors text ', () => {
    const wrapper = shallow(<ColorsDropdown />);
    const colorsDisplay = 'Colors';
    expect(wrapper.contains(colorsDisplay)).toEqual(true);
});



describe('Colors shoeMenu button ', () => {
    const wrapper = shallow(<ColorsDropdown colors={[]} />);
    const menuButton = wrapper.find('#showMenu');
    it('Colors menu button exists', () => {
        expect(menuButton.exists()).toBe(true);
    });
    it('showMenu method changes showMenu state to true', () => {
        wrapper.setState({
            showMenu: false
        });
        menuButton.simulate('click', {
            preventDefault() { }
        });
        wrapper.instance().forceUpdate();
        expect(wrapper.state('showMenu')).toEqual(true);
    });

});

describe('Colors printShoe button ', () => {
    const wrapper = shallow(<ColorsDropdown colors={['red']} />);
    wrapper.setState({
        showMenu: true
    });
    const printButton = wrapper.find('#showShoe');
    it('PrintShoe button exists', () => {
        expect(printButton.exists()).toBe(true);
    });
    it('color button should click and render color/style of shoe', () => {
        printButton.simulate('click', {
            preventDefault() { }
        });
        wrapper.instance().forceUpdate();
        expect(wrapper.state('showMenu')).toEqual(true);
    });
});
