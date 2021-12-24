import React from 'react';
import { shallow, mount } from 'enzyme';

import MainPage from './MainPage.jsx';
import ProductDetail from './ProductDetail.jsx';
//import StarRatings from './StarRatings';
import App from './App.jsx';


describe('App Component', () => {
    const  wrapper = shallow(<App />)

    it('renders without issues', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists()).toBe(true);
   });
    it('renders Zappies header tag', () => {
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
});
describe('getShoe Button', () => {
    const wrapper = shallow((<App />));
    const button = wrapper.find('button');
    
    it('shows button to exist', () => {
        expect(button.exists()).toBe(true);
        expect(button).toHaveLength(1);
    })
    it('shows Products text inside button', () => {
        expect(button.text()).toContain("Products")
    })
    it('test click event', () => {
        button.simulate('click');
       // console.log(button.debug());
        wrapper.instance().forceUpdate();
        expect(wrapper.state('nextPage')).toEqual(true);
    });
});
