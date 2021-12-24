import React from 'react';
import { shallow } from 'enzyme';
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



describe('Colors button ', () => {
    const wrapper = shallow(<ColorsDropdown colors={[]} />);
    const menuButton = wrapper.find('#showMenu');
    it('Colors button exists', () => {
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
        //console.log(wrapper.debug());
    });
});
      
     
