import React from 'react';
import { shallow, mount } from 'enzyme';
import { SocialIcon } from 'react-social-icons';
import SocialMedia from './SocialMedia.jsx';


it("renders without issues", () => {
    shallow(<SocialMedia />);
})

it("renders Socia Media without errors", () => {
    const wrapper = shallow(<SocialMedia />);
    const socials = "Social Media";
    expect(wrapper.contains(socials)).toEqual(true);
})