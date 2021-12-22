import React from 'react';
import { shallow, mount } from 'enzyme';
import axios from 'axios'
import ColorsDropdown from './ColorsDropdown.jsx';
import SizesDropdown from './SizesDropdown.jsx';
import QuantityDropdown from './QuantityDropdown.jsx';
import StarRatings from './StarRatings.jsx';
import SocialMedia from './SocialMedia.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import ProductDetail from './ProductDetail.jsx';


it("renders without issues", () => {
    shallow(<ProductDetail />);
});

describe('Productdetail renders first part of conditional', () => {
    it('should have a header tag with Brand Name of Product', () => {
        const wrapper = shallow(<ProductDetail />);
        expect(wrapper.find('h1').text()).toEqual('Vans');
    });
});

it('should render ColorsDropdown component', () => {
    const wrapper = mount(<ProductDetail />);
    wrapper.setState({
        itemExists: true,
        allImages: { red: [] },
        currentItem: ['red']
    });
    const PD = wrapper.find('#id');
    expect(PD.exists()).toBe(true);
    const CD = wrapper.find(ColorsDropdown);
    const SD = wrapper.find(SizesDropdown);
    const QD = wrapper.find(QuantityDropdown);
    const SR = wrapper.find(StarRatings);
    const SM = wrapper.find(SocialMedia);
    //const SC = wrapper.find(ShoppingCart);
    expect(wrapper.exists()).toBe(true);
    expect(CD.exists()).toBe(true);
    expect(SD.exists()).toBe(true);
    expect(QD.exists()).toBe(true);
    expect(SR.exists()).toBe(true);
    expect(SM.exists()).toBe(true);
    //expect(SC.exists()).toBe(true);
});


// it('should render ColorsDropdown component', () => {
//     const wrapper = mount(<ProductDetail />);
//     //const productDetail = wrapper.find('#pd');
//     //expect(productDetail.exists()).toBe(true);
//      const CD = wrapper.find(ColorsDropdown);
//      expect(CD.exists()).toBe(true);
// });


