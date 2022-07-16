import React from "react";
import { act } from 'react-dom/test-utils';
import { shallow } from "enzyme";
import axios from "axios"
import ColorsDropdown from "./ColorsDropdown.jsx";
import SizesDropdown from "./SizesDropdown.jsx";
import QuantityDropdown from "./QuantityDropdown.jsx";
import StarRatings from "./StarRatings.jsx";
import SocialMedia from "./SocialMedia.jsx";
import ProductDetail from "./ProductDetail.jsx";

it("renders without issues", () => {
    shallow(<ProductDetail />);
});

// describe("ProductDetail renders first part of conditional", () => {
//     const wrapper = shallow(<ProductDetail />);
//     wrapper.setState({
//         itemExists: false
//     });
//     it("should have a header tag with Brand Name of Product", () => {
//         expect(wrapper.find("h1").text()).toEqual("Vans");
//     });
//     it("a button for getting shoe exists", () => {
//         const button = wrapper.find("#getShoeButton");
//         expect(button.exists()).toBe(true);
//         expect(button.length).toBe(1);
//     });
// });
describe("ProductDetail renders for second half of conditional ", () => {
    const wrapper = shallow(<ProductDetail />);
    wrapper.setState({
        itemExists: true,
        allImages: { red: [] },
        currentItem: ["red"],
        allThumbnails: { "blue": ["pic1.jpeg", "pic2.jpeg", "pic3.jpeg"], "red": ["pic4", "pic5"] }
    });
    it("renders an image", () => {
        const image = wrapper.find("#images")
        expect(wrapper.find(image)).toBeTruthy();
    });
    it("should render all Child components/ second part of conditional", () => {
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

// it("should render thumbnails of product ", () => {
//     let wrapper = shallow(<ProductDetail allThumbnails={{}} currentItem={""}/>);
//     wrapper.setState({

//         currentItem: "blue"
//     });
//     expect(wrapper.state("currentItem")).toEqual("blue");
// });

it("should invoke printShoe method as a prop in ColorsDropdown Component", () => {
    let wrapper = shallow(<ProductDetail />);
    wrapper.setState({
        itemExists: true,
        allImages: {
            red: [],
            blue: []
        },
        color: null,
        currentItem: ["red"],
        shoeDetails: {
            "red": { sizes: [1, 2, 3] },
            "blue": { sizes: [6, 2, 7] }
        },
        sizes: null
    });
    const event = {
        target: { value: "blue" }
    }
    wrapper.find("ColorsDropdown").props().printShoe(event);
    expect(wrapper.state("color")).toEqual("blue");

});

it("should invoke chooseSize method as a prop in SizesDropdown Component", () => {
    let wrapper = shallow(<ProductDetail />);
    wrapper.setState({
        itemExists: true,
        allImages: {
            red: [],
            blue: []
        },
        color: "red",
        currentItem: "red",
        shoeDetails: { "red": { sizes: { 1: 10, 2: 4, 3: 5 } } },
        size: 0,
        sizes: null
    });
    const event = {
        target: { value: 2 }
    }
    wrapper.find("SizesDropdown").props().getSize(event);
    expect(wrapper.state("size")).toEqual(2);
});

it("should invoke chooseAmount method as a prop in QuantityDropdown Component", () => {
    let wrapper = shallow(<ProductDetail />);
    wrapper.setState({
        itemExists: true,
        allImages: { red: [], blue: [] },
        amount: null,
        color: "red",
        currentItem: "red",
        shoeDetails: { "red": { sizes: { 1: 10, 2: 4, 3: 5 } } },
        size: 0,
        sizes: null
    });
    const event = {
        target: { value: 1 }
    }
    wrapper.find("QuantityDropdown").props().chooseAmount(event);
    expect(wrapper.state("amount")).toEqual(1);
});

// const whenStable = async () => {
//     await act(async () => {
//         await new Promise((resolve) => setTimeout(resolve, 0));
//     });
// };

// describe('axios get request for initial data from zappos api', () => {
//     it('should pass', async () => {
//         const mResponse = { data: "5" };
//         const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce(mResponse);
//         const wrapper = shallow(<ProductDetail></ProductDetail>);
//         await whenStable();
//         expect(wrapper.state("itemExists")).toEqual("true");
//         console.log(wrapper.state("itemExists"))
//         getSpy.mockRestore();
//     });
// });
describe('axios get request to zappos api', () => {
    it('should pass', async () => {
        const mResponse = { data: "5" };
        const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce(mResponse);
        const wrapper = shallow(<ProductDetail></ProductDetail>);
        await wrapper.instance().componentDidMount();
        expect(axios.get).toHaveBeenCalled();
        getSpy.mockRestore();
    });
});