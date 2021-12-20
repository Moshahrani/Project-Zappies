import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCart from './ShoppingCart.jsx';


it("renders Quantity ", () => {
    const wrapper = shallow(<ShoppingCart />);
    const shoppingCart = "Add to Cart";
    expect(wrapper.contains(shoppingCart)).toEqual(true);
})