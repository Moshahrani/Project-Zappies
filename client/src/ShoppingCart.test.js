import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCart from './ShoppingCart.jsx';


it("renders Add to Cart phrase ", () => {
    const wrapper = shallow(<ShoppingCart />);
    const shoppingCart = "Add to Cart";
    expect(wrapper.contains(shoppingCart)).toEqual(true);
})
describe('Add to Cart button ', () => {
    const wrapper = shallow(<ShoppingCart colors={[]} />);
    const menuButton = wrapper.find('.button');

    it('Add to Cart button exists', () => {
        expect(menuButton.exists()).toBe(true);
    });
    
});