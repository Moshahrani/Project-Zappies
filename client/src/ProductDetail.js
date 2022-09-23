import React from 'react';
import axios from 'axios'
import ColorsDropdown from './ColorsDropdown.js';
import SizesDropdown from './SizesDropdown.js';
import QuantityDropdown from './QuantityDropdown.js';
import StarRatings from './StarRatings.js';
import SocialMedia from './SocialMedia.js';
import ShoppingCart from './ShoppingCart.js';
import PhotoGallery from './PhotoGallery.js';
import Reviews from './Reviews.js';
import RatingBar from './RatingBar.js';
import StoreLogo from './storeLogo.png';
import Brands from './Brands.js';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: null,
            brandName: '',
            modelName: '',
            productId: '',
            productName: '',
            currentItem: '',
            itemExists: false,
            currentDetails: null,
            description: [],
            price: null,
            productRating: '',
            reviewRating: '',
            reviews: {},
            ratings: {},
            leastUpVotes: '',
            mostUpVotes: '',
            mostVoteSubmit: false,
            leastVoteSubmit: false,
            sizes: [],
            colors: [],
            allImages: {},
            allThumbnails: {},
            shoeDetails: {},
            size: null,
            color: null,
            quantity: null,
            cart: {},
            currentIndex: 0,
            lastIndex: null
        }
        this.getSpecificShoe = this.getSpecificShoe.bind(this);
        this.printShoe = this.printShoe.bind(this);
        this.chooseSize = this.chooseSize.bind(this);
        this.chooseAmount = this.chooseAmount.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.rightArrowClick = this.rightArrowClick.bind(this);
        this.leftArrowClick = this.leftArrowClick.bind(this);
        this.chooseImage = this.chooseImage.bind(this);
        this.mostUpVote = this.mostUpVote.bind(this);
        this.leastUpVote = this.leastUpVote.bind(this);
    }

    printShoe = (event) => {
        // possibility of adding on sale information for products 
        // pending for now 

        // for (var i in this.state.shoeDetails[event.target.value]) {
        //     if (i !== "onSale" || i !== "originalPrice" || i !== "percentOff" || i !== "price") {
        //         console.log(typeof i)
        //     }
        // }
        const chosenColor = event.target.getAttribute('value');

        let allSizes = [];
        let size = null;
        let amount = this.state.amount

        for (let i in this.state.shoeDetails[chosenColor].sizes) {
            allSizes.push(i)
        }

        if (this.state.color === chosenColor) {
            size = this.state.size
        } else {
            amount = 'Quantity'
            size = 'Select Size'
        }
        this.setState({
            amount: amount,
            currentItem: chosenColor,
            color: chosenColor,
            size: size,
            sizes: [...allSizes],
            price: '$' + this.state.shoeDetails[chosenColor]["price"]
        })
    }

    componentDidMount() {
        var options = {
            method: 'GET',
            url: 'https://zappos1.p.rapidapi.com/products/detail',
            params: { productId: '7213524' },
            headers: {
                'X-RapidAPI-Host': 'zappos1.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.ZAPPOS_API_KEY,
            }
        };

        return axios.request(options).then((response) => {

            let shoeDetails = {};
            let priceString = "";
            for (let i = 0; i < response.data.product[0].styles.length; i++) {
                let sizeInventory = {};
                let sizes = {};
                //Converting sizes in stock from strings to Numbers
                for (let j = 0; j < response.data.product[0].styles[i].stocks.length; j++) {
                    sizes[response.data.product[0].styles[i].stocks[j].size] = Number(response.data.product[0].styles[i].stocks[j].onHand);
                }

                // Putting sizes in separate object to make searching easier
                sizeInventory["sizes"] = sizes

                // Checking if product on sale, if so, convert original sale price string to integer by removing $ sign
                if (response.data.product[0].styles[i].onSale === "true") {
                    let orgPrice = response.data.product[0].styles[i].originalPrice.split('$')
                    let cost = Number(orgPrice[1]);
                    let numPrice = parseFloat((cost).toFixed(2))
                    sizeInventory["originalPrice"] = numPrice;
                    sizeInventory["onSale"] = true;
                    sizeInventory["percentOff"] = response.data.product[0].styles[i].percentOff;
                }
                // Removing $ sign from string value but for current price value
                let price = response.data.product[0].styles[i].price.split('$')
                priceString = response.data.product[0].styles[i].price;
                let cost = Number(price[1])
                let regPrice = parseFloat((cost).toFixed(2))
                sizeInventory["price"] = regPrice;

                shoeDetails[response.data.product[0].styles[i].color] = sizeInventory;
            }

            // Getting Shoe Details  for each model (inventory, sizes, price, sale?, etc...)

            let rating = response.data.product[0].reviewSummary.reviewWithMostVotes.overallRating;
            // Getting general shoe information
            // all colors, product images, price
            let describe = response.data.product[0].description
            //let cost = response.data.product[0].styles[0].price
            let styleList = [];
            let shoeSizes = [];
            let allPictures = {};
            let allThumbnails = {};
            let brand = response.data.product[0].brandName;
            let model = response.data.product[0].productName;
            let id = response.data.product[0].productId;

            let imageLink = response.data.product[0].styles[0].color
            for (let i = 0; i < response.data.product[0].styles.length; i++) {
                styleList.push(response.data.product[0].styles[i].color);
                let allImages = [];
                let thumbnails = [];
                for (let j = 1; j < response.data.product[0].styles[i].images.length; j++) {
                    allImages.push("https://m.media-amazon.com/images/I/" + response.data.product[0].styles[i].images[j].imageId + "._AC_SR700,525_.jpg");
                    thumbnails.push("https://m.media-amazon.com/images/I/" + response.data.product[0].styles[i].images[j].imageId + "._AC_SR700,525_.jpg")
                }
                allPictures[response.data.product[0].styles[i].color] = [...allImages]
                allThumbnails[response.data.product[0].styles[i].color] = [...thumbnails]
            }

            // Get all sizes for particular color in array for efficient dropdown mapping

            let allSizes = []
            for (let i in shoeDetails[imageLink].sizes) {
                allSizes.push(i)
            }

            this.setState({
                brandName: brand,
                productName: model,
                productId: id,
                currentItem: imageLink,
                description: describe,
                currentDetails: shoeDetails[imageLink],
                itemExists: true,
                price: priceString,
                productRating: rating,
                // sizes: [...shoeSizes],
                sizes: [...allSizes],
                colors: [...styleList],
                allImages: allPictures,
                allThumbnails: allThumbnails,
                lastIndex: allPictures[imageLink].length - 1,
                reviews: response.data.product[0].reviewSummary,
                ratings: response.data.product[0].overallRating,
                leastUpVotes: Number(response.data.product[0].reviewSummary.reviewWithMostVotes.upVotes),
                mostUpVotes: Number(response.data.product[0].reviewSummary.reviewWithLeastVotes.upVotes),
                shoeDetails: shoeDetails
            })
        }).catch((error) => {
            console.error(error);
        });

    }
    getSpecificShoe = (event) => {
        let shoeId = event.target.id;

        var options = {
            method: 'GET',
            url: 'https://zappos1.p.rapidapi.com/products/detail',
            params: { productId: shoeId },
            headers: {
                'X-RapidAPI-Host': 'zappos1.p.rapidapi.com',
                'X-RapidAPI-Key': 'fa300790c6msh1f0a61b57b1d3ecp1e914djsn75574964670f'
            }
        };

        return axios.request(options).then((response) => {
            console.log(response.data.product[0])
            let shoeDetails = {};
            let priceString = "";
            for (let i = 0; i < response.data.product[0].styles.length; i++) {
                let sizeInventory = {};
                let sizes = {};
                //Converting sizes in stock from strings to Numbers
                for (let j = 0; j < response.data.product[0].styles[i].stocks.length; j++) {
                    sizes[response.data.product[0].styles[i].stocks[j].size] = Number(response.data.product[0].styles[i].stocks[j].onHand);
                }

                // Putting sizes in separate object to make searching easier
                sizeInventory["sizes"] = sizes

                // Checking if product on sale, if so, convert original sale price string to integer by removing $ sign
                if (response.data.product[0].styles[i].onSale === "true") {
                    let orgPrice = response.data.product[0].styles[i].originalPrice.split('$')
                    let cost = Number(orgPrice[1]);
                    let numPrice = parseFloat((cost).toFixed(2))
                    sizeInventory["originalPrice"] = numPrice;
                    sizeInventory["onSale"] = true;
                    sizeInventory["percentOff"] = response.data.product[0].styles[i].percentOff;
                }
                // Removing $ sign from string value but for current price value
                let price = response.data.product[0].styles[i].price.split('$')
                priceString = response.data.product[0].styles[i].price;
                let cost = Number(price[1])
                let regPrice = parseFloat((cost).toFixed(2))
                sizeInventory["price"] = regPrice;

                shoeDetails[response.data.product[0].styles[i].color] = sizeInventory;
            }

            // Getting Shoe Details  for each model (inventory, sizes, price, sale?, etc...)

            let rating = response.data.product[0].reviewSummary.reviewWithMostVotes.overallRating;
            // Getting general shoe information
            // all colors, product images, price
            let describe = response.data.product[0].description
            //let cost = response.data.product[0].styles[0].price
            let styleList = [];
            let shoeSizes = [];
            let allPictures = {};
            let allThumbnails = {};
            let brand = response.data.product[0].brandName;
            let model = response.data.product[0].productName;
            let id = response.data.product[0].productId;

            let imageLink = response.data.product[0].styles[0].color
            for (let i = 0; i < response.data.product[0].styles.length; i++) {
                styleList.push(response.data.product[0].styles[i].color);
                let allImages = [];
                let thumbnails = [];
                for (let j = 1; j < response.data.product[0].styles[i].images.length; j++) {
                    allImages.push("https://m.media-amazon.com/images/I/" + response.data.product[0].styles[i].images[j].imageId + "._AC_SR700,525_.jpg");
                    thumbnails.push("https://m.media-amazon.com/images/I/" + response.data.product[0].styles[i].images[j].imageId + "._AC_SR700,525_.jpg")
                }
                allPictures[response.data.product[0].styles[i].color] = [...allImages]
                allThumbnails[response.data.product[0].styles[i].color] = [...thumbnails]
            }

            // Get all sizes for particular color in array for efficient dropdown mapping

            let allSizes = []
            for (let i in shoeDetails[imageLink].sizes) {
                allSizes.push(i)
            }

            this.setState({
                brandName: brand,
                productName: model,
                productId: id,
                currentItem: imageLink,
                description: describe,
                currentDetails: shoeDetails[imageLink],
                itemExists: true,
                price: priceString,
                productRating: rating,
                sizes: [...allSizes],
                colors: [...styleList],
                allImages: allPictures,
                allThumbnails: allThumbnails,
                lastIndex: allPictures[imageLink].length - 1,
                reviews: response.data.product[0].reviewSummary,
                ratings: response.data.product[0].overallRating,
                leastUpVotes: Number(response.data.product[0].reviewSummary.reviewWithLeastVotes.upVotes),
                mostUpVotes: Number(response.data.product[0].reviewSummary.reviewWithMostVotes.upVotes),
                shoeDetails: shoeDetails
            })
        }).catch((error) => {
            console.error(error);
        });
    }

    chooseSize = (event) => {
        const value = event.target.getAttribute('value')
        let changed = null;
        if (value !== this.state.size) {
            changed = 'Quantity';
        }
        this.setState({
            amount: changed,
            size: value,
            quantity: this.state.shoeDetails[this.state.currentItem].sizes[value]
        })
    }

    chooseAmount = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    addToCart = (event) => {
        let add = {};
        let order = {};

        if (this.state.size && this.state.amount) {
            let price = this.state.price;
            let quantity = this.state.amount;
            let size = this.state.size
            order["price"] = this.state.price;
            order["quantity"] = this.state.amount;
            order["size"] = this.state.size;


            add[this.state.currentItem] = order;

            this.setState({
                cart: add
            })
        }
    }

    chooseImage = (event) => {
        let chosenImage = event.target.src.split("._AC_SR700,525_.jpg");
        let images = this.state.allImages[this.state.currentItem];
        let index = null;

        for (let i = 0; i < images.length; i++) {
            let match = images[i].split("._AC_SR700,525_.jpg")
            if (chosenImage[0] === match[0]) {
                index = i;
            }
        }
        this.setState({
            currentIndex: index
        })
    }

    leftArrowClick = (event) => {
        console.log(event.target)
        event.preventDefa
        if (this.state.currentIndex === 0) {
            this.setState({
                currentIndex: this.state.lastIndex
            })
        } else {
            this.setState({
                currentIndex: this.state.currentIndex - 1
            })
        }
    }

    rightArrowClick = (event) => {
        if (this.state.currentIndex === this.state.lastIndex) {
            this.setState({
                currentIndex: 0
            })
        } else {
            this.setState({
                currentIndex: this.state.currentIndex + 1
            })
        }
    }

    mostUpVote = (event) => {
        if (!this.state.mostVoteSubmit) {
            this.setState({
                mostUpVotes: this.state.mostUpVotes + 1,
                mostVoteSubmit: true
            })
        } else {
            this.setState({
                mostUpVotes: this.state.mostUpVotes - 1,
                mostVoteSubmit: false
            })
        }
    }

    leastUpVote = (event) => {
        if (!this.state.leastVoteSubmit) {
            this.setState({
                leastUpVotes: this.state.leastUpVotes + 1,
                leastVoteSubmit: true
            })
        } else {
            this.setState({
                leastUpVotes: this.state.leastUpVotes - 1,
                leastVoteSubmit: false
            })
        }

    }

    render() {
        if (!this.state.itemExists) {
            return (
                <div id="getProductDetails" className="beforeGetShoe">
                </div>
            )
        } else {
            return (
                <div>
                    <div className="topBar" />
                    <img id="logo" className="storeLogo" src={StoreLogo} />
                    <div id="pd" className="productDetailWrapper">
                        <div className="shoeDetailWrapper">
                            <div className="thumbnails" >
                                {this.state.allThumbnails[this.state.currentItem].map((item, index) => (
                                    <img id="img" className="images" src={item} key={index} onClick={this.chooseImage}></img>
                                ))}
                            </div>
                            <PhotoGallery imageList={this.state.allImages[this.state.currentItem]} firstIndex={this.state.currentIndex}
                                leftArrow={this.leftArrowClick} rightArrow={this.rightArrowClick} />
                            <div className="infoContainer" >
                                <p id="productId">SKU  {this.state.productId}</p>
                                <p id="brandName">{this.state.brandName}</p>
                                <p id="model"> {this.state.productName}</p>
                                <p id="price" style={{ color: "#228B22" }} >{this.state.price}</p>
                                <div className="allStars">
                                    <StarRatings rating={this.state.productRating} style={{ paddingLeft: '20px' }} />
                                </div>
                                <div className="socialMedia" style={{ paddingLeft: '20px', paddingBottom: '10px' }}>
                                    <SocialMedia />
                                </div>
                                <div id="dropdowns" style={{ paddingLeft: '20px' }}>
                                    <ColorsDropdown colors={this.state.colors} printShoe={this.printShoe} />
                                    <SizesDropdown size={this.state.size} sizes={this.state.sizes} currentShoe={this.state.currentItem} getSize={this.chooseSize} />
                                    <QuantityDropdown amount={this.state.amount} size={this.state.size} quantity={this.state.quantity} chooseAmount={this.chooseAmount} />
                                </div>
                                <div>
                                    <ShoppingCart />
                                </div>
                            </div>
                        </div>
                        <div className="horizontalDivider" style={{ paddingTop: 30 }} />
                        <div className="detailsContainer">
                            <div className="description" dangerouslySetInnerHTML={{ __html: this.state.description }} />
                            <div id="ratingBar">
                                <RatingBar ratings={this.state.ratings} />
                            </div>
                        </div>
                        <div>
                            <Reviews reviews={this.state.reviews} leastVotes={this.state.leastUpVotes} mostVotes={this.state.mostUpVotes} mostUpVote={this.mostUpVote}
                                leastUpVote={this.leastUpVote} />
                        </div>
                    </div>
                    <div className="horizontalDivider" />
                    <div className="brands">
                        <Brands getSpecificShoe={this.getSpecificShoe} />
                    </div>
                </div>
            )
        }
    }
}

export default ProductDetail;





