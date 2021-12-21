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

describe('MainPage first test', () => {
    it('should have a header tag with Brand Name of Product', () => {
      const wrapper = shallow(<ProductDetail />);
      expect(wrapper.find('h1').text()).toEqual('Vans');
    });
  });


