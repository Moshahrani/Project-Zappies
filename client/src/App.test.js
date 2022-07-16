import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductDetail from './ProductDetail.jsx';
//import StarRatings from './StarRatings';
import App from './App.jsx';


describe('App Component', () => {
    const  wrapper = shallow(<App />)

    it('renders without issues', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists()).toBe(true);
   });
});

