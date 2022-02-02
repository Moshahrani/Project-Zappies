import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios'
import ColorsDropdown from './ColorsDropdown.jsx';
import SizesDropdown from './SizesDropdown.jsx';
import QuantityDropdown from './QuantityDropdown.jsx';
import StarRatings from './StarRatings.jsx';
import SocialMedia from './SocialMedia.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import Reviews from './Reviews.jsx';
import RatingBar from './RatingBar.jsx';
import ImageMagnifier from './ImageMagnifier.jsx';


class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: null,
            brandName: '',
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
            colors: '',
            sizes: null,
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
        let allSizes = [];
        for (let i in this.state.shoeDetails[event.target.value].sizes) {
            allSizes.push(i)
        }

        this.setState({
            currentItem: event.target.value,
            color: event.target.value,
            sizes: [...allSizes],
            price: this.state.shoeDetails[event.target.value]["price"]
        })


    }

    getSpecificShoe = () => {
        var options = {
            method: 'GET',
            url: 'https://zappos1.p.rapidapi.com/products/detail',
            params: { productId: '7213524' },
            headers: {
                'x-rapidapi-key': 'fa300790c6msh1f0a61b57b1d3ecp1e914djsn75574964670f',
                'x-rapidapi-host': 'zappos1.p.rapidapi.com'
            }
        };

        axios.request(options).then((response) => {
            // console.log(response.data.product[0].reviewSummary)
            // console.log(response.data.product[0].reviewSummary.reviewWithMostVotes)
            // console.log(response.data.product[0].reviewSummary.reviewWithLeastVotes)
            // console.log(response.data.product[0].styles[1].stocks)
            // console.log(response.data.product[0].styles[0].color)
            // console.log(response.data.product[0].styles[0])
            let shoeDetails = {}
            for (let i = 0; i < response.data.product[0].styles.length; i++) {
                let sizeInventory = {};
                let sizes = {};
                //console.log(response.data.product[0].styles[i].stocks[1])
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

            let imageLink = response.data.product[0].styles[0].color
            for (let i = 0; i < response.data.product[0].styles.length; i++) {
                styleList.push(response.data.product[0].styles[i].color);
                let allImages = [];
                let thumbnails = [];
                for (let j = 1; j < response.data.product[0].styles[i].images.length; j++) {
                    allImages.push("https://m.media-amazon.com/images/I/" + response.data.product[0].styles[i].images[j].imageId + "._AC_SR700,525_.jpg");
                    thumbnails.push("https://m.media-amazon.com/images/I/" + response.data.product[0].styles[i].images[j].imageId + "._AC_SR700,050_.jpg")
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
                currentItem: imageLink,
                description: describe,
                currentDetails: shoeDetails[imageLink],
                itemExists: true,
                //price: cost,
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


    chooseSize = (event) => {
        this.setState({
            size: event.target.value,
            quantity: this.state.shoeDetails[this.state.currentItem].sizes[event.target.value]
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
        let chosenImage = event.target.src.split("._AC_SR700,050_.jpg");
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

        console.log(this.state.ratings)
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
                    <h1>
                        <button type="button" id="getShoeButton" className="getShoeButton" onClick={this.getSpecificShoe}>Vans</button>
                    </h1>
                </div>
            )
        } else {
            return (
                <div id="pd" className="productDetail" >
                    <PhotoGallery imageList={this.state.allImages[this.state.currentItem]} firstIndex={this.state.currentIndex}
                        leftArrow={this.leftArrowClick} rightArrow={this.rightArrowClick} />
                    <div className="thumbnails" >
                        {this.state.allThumbnails[this.state.currentItem].map((item, index) => (
                            <img id="img" src={item} key={index} onClick={this.chooseImage}></img>
                        ))}
                    </div>
                    <div>
                        <StarRatings rating={this.state.productRating} />
                    </div>
                    <div>
                        <SocialMedia />
                    </div>
                    <div id="dropdowns">
                        <ColorsDropdown colors={this.state.colors} printShoe={this.printShoe} />
                        <SizesDropdown size={this.state.size} sizes={this.state.sizes} currentShoe={this.state.currentItem} getSize={this.chooseSize} />
                        <QuantityDropdown amount={this.state.amount} size={this.state.size} quantity={this.state.quantity} chooseAmount={this.chooseAmount} />
                    </div>
                    <div>
                        <Reviews reviews={this.state.reviews} leastVotes={this.state.leastUpVotes} mostVotes={this.state.mostUpVotes} mostUpVote={this.mostUpVote}
                            leastUpVote={this.leastUpVote} />
                    </div>
                    <div>
                        <button className="Cart" onClick={this.addToCart}>Add to Cart</button>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: this.state.description }} />
                    <div>
                        <RatingBar ratings={this.state.ratings} />
                    </div>
                </div>
            )
        }
    }
}

export default ProductDetail;






                    // Sizes Available
                    //     <ul>
                    //         {this.state.sizes.map((item, index) => (
                    //             <li value={item} key={index}>{item}</li>
                    //         ))}
                    //     </ul>



                //     let allImages = [];
                // for (let j = 1; j < response.data.product[0].styles[i].images[j].length; j++) {
                //     console.log(response.data.product[0].styles[i].images[j])
                //     //allImages.push("https://m.media-amazon.com/images/I/" + response.data.product[0].styles[i].images[j].imageId + "._AC_SR700,525_.jpg")
                // }


            //     axios.request(options).then((response) => {
            //         //console.log(response.data.product[0].sizing.allValues[1].value)
            //         //console.log(response.data.product[0].styles)
            //         console.log(response.data.product[0].styles[0].images)
            //         console.log(response.data.product[0].styles[0].images[2].imageId)
            //         let describe = response.data.product[0].description
            //         let cost = response.data.product[0].styles[0].price
            //         let styleList = [];
            //         let images = {};
            //         let shoeSizes = [];
            //         let allPictures = {};

            //         let imageLink = "https://m.media-amazon.com/images/I/" + response.data.product[0].styles[0].images[0].imageId + "._AC_SR700,525_.jpg"
            //         for (let i = 0; i < response.data.product[0].styles.length; i++) {
            //             styleList.push(response.data.product[0].styles[i].color);
            //             images[response.data.product[0].styles[i].color] = "https://m.media-amazon.com/images/I/" + response.data.product[0].styles[i].images[1].imageId + "._AC_SR700,525_.jpg";
            //             let allImages = [];
            //             for (let j = 1; j < response.data.product[0].styles[i].images.length; j++) {
            //                 allImages.push("https://m.media-amazon.com/images/I/" + response.data.product[0].styles[i].images[j].imageId+ "._AC_SR700,525_.jpg")
            //             }
            //             //console.log(allImages)
            //             allPictures[response.data.product[0].styles[i].color] = [...allImages]
            //         }
            //         console.log(allPictures)
            //         for (let i = 1; i < response.data.product[0].sizing.allValues.length; i++) {
            //             shoeSizes.push(response.data.product[0].sizing.allValues[i].value)
            //         }
            //         this.setState({
            //             image: imageLink,
            //             description: describe,
            //             price: cost,
            //             sizes: [...shoeSizes],
            //             colors: [...styleList],
            //             styleImages: images,
            //             allImages: allPictures
            //         })
            //     }).catch((error) => {
            //         console.error(error);
            //     });

            // }