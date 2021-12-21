import React from 'react';
import { shallow, mount } from 'enzyme';

import MainPage from './MainPage.jsx';
import ProductDetail from './ProductDetail.jsx';
//import StarRatings from './StarRatings';
import App from './App.jsx';

it("renders without issues", () => {
    shallow(<App />);
});

it("renders App", () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Zappies</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
})


it('should render MainPage', () => {
    const wrapper = mount(<App />);
    const app = wrapper.find('#app');
    expect(app.exists()).toBe(true);
    const MP = wrapper.find(MainPage);
    expect(wrapper.exists()).toBe(true);
    expect(MP.exists()).toBe(true);
});