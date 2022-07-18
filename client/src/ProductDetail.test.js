import React from "react";
import { shallow, mount } from "enzyme";
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

describe("ProductDetail renders for second half of conditional ", () => {
    const wrapper = shallow(<ProductDetail />);
    wrapper.setState({
        itemExists: true,
        allImages: { red: [] },
        currentItem: ["red"],
        allThumbnails: { "blue": ["pic1.jpeg", "pic2.jpeg", "pic3.jpeg"], "red": ["pic4", "pic5"] }
    });
    it("renders an image", () => {
        const image = wrapper.find(".images")
        expect(image.exists()).toBeTruthy();
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

it("should render thumbnails of product ", () => {
    let wrapper = shallow(<ProductDetail allThumbnails={{}} currentItem={""} />);
    wrapper.setState({

        currentItem: "blue"
    });
    expect(wrapper.state("currentItem")).toEqual("blue");
});


// already tested for in ColorsDropwdown component

// it("should invoke printShoe method as a prop in ColorsDropdown Component", () => {
//     let wrapper = shallow(<ProductDetail  allThumbnails={{}} currentItem={""}/>);
//     wrapper.setState({
//         allThumbnails: {"red": ["1.jpeg", "2.jpeg"]},
//         itemExists: true,
//         allImages: {
//             red: [],
//             blue: []
//         },
//         color: null,
//         currentItem: "red",
//         shoeDetails: {
//             "red": { sizes: [1, 2, 3] },
//             "blue": { sizes: [6, 2, 7] }
//         },
//         sizes: null
//     });
//     const event = {
//         target: { value: "blue" }
//     }
//     wrapper.find("ColorsDropdown").props().printShoe(event);
//     expect(wrapper.state("color")).toEqual("blue");

// });

// it("should invoke chooseSize method as a prop in SizesDropdown Component", () => {
//     let wrapper = shallow(<ProductDetail allThumbnails={{}} currentItem={""}/>);
//     wrapper.setState({
//         itemExists: true,
//         allImages: {
//             red: [],
//             blue: []
//         },
//         color: "red",
//         currentItem: "red",
//         shoeDetails: { "red": { sizes: { 1: 10, 2: 4, 3: 5 } } },
//         size: 0,
//         sizes: null,
//         currentItem: "blue",
//         allThumbnails: {"blue": [1,2,3]}
//     });
//     const event = {
//         target: <a value="7">seven</a>
//     }
//     wrapper.find("SizesDropdown").props().getSize(event);
//     expect(wrapper.state("size")).toEqual(2);
// });

it("should invoke chooseAmount method as a prop in QuantityDropdown Component", () => {
    let wrapper = shallow(<ProductDetail allThumbnails={{}} currentItem={""} />);
    wrapper.setState({
        itemExists: true,
        allImages: { red: [], blue: [] },
        amount: null,
        color: "red",
        currentItem: "red",
        shoeDetails: { "red": { sizes: { 1: 10, 2: 4, 3: 5 } } },
        size: 0,
        sizes: null,
        currentItem: "blue",
        allThumbnails: { "blue": [1, 2, 3] }
    });
    const event = {
        target: { value: 1 }
    }
    wrapper.find("QuantityDropdown").props().chooseAmount(event);
    expect(wrapper.state("amount")).toEqual(1);
});

// axios get request from componentDidMount

describe('axios get request to zappos api', () => {
    test('should call componentDidMount', () => {
        const wrapper = mount(<ProductDetail></ProductDetail>);
        wrapper.instance().componentDidMount();
        wrapper.update();
    });
});

