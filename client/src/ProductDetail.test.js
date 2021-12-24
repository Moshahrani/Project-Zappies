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
import { TestWatcher } from 'jest';


it("renders without issues", () => {
    shallow(<ProductDetail />);
});


describe('ProductDetail renders first part of conditional', () => {
    const wrapper = shallow(<ProductDetail />);
    wrapper.setState({
        itemExists: false
        //allImages: { red: [] },
        //currentItem: ['red']
    });
    it('should have a header tag with Brand Name of Product', () => {
        expect(wrapper.find('h1').text()).toEqual('Vans');
    });
    it('a button for getting shoe exists', () => {
        const button = wrapper.find('#getShoeButton');
        expect(button.exists()).toBe(true);
        expect(button.length).toBe(1);
    });
});
describe('ProductDetail renders for second half of conditional ', () => {
    const wrapper = shallow(<ProductDetail />);
    wrapper.setState({
        itemExists: true,
        allImages: { red: [] },
        currentItem: ['red']
    });
    it('should render all Child components/ second part of conditional', () => {
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

});
// describe('test getShoe Button', () => {
//     it('test click event', () => {
//         const mockCB = jest.fn();
//         const wrapper = shallow((<ProductDetail getSpecificShoe={mockCB} />)); 
//         wrapper.find("button").simulate('click');
//         expect(mockCB).toHaveBeenCalled();
//     });
// });



// describe('test getShoe Button', () => {
//     it('test click event', () => {
//         const mockCB = jest.fn();
//         const wrapper = shallow(<ProductDetail onClick={mockCB} />);
//         wrapper.find('button').simulate('click');
//         expect(mockCB).toHaveBeenCalled();
//     });
// });


