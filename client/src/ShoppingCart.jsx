import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            size: null,
            color: null,
            quantity: null
        }
        this.addToCart = this.addToCart.bind(this);
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

    render() {
        return (
            <div className="cart" >
                <ul className="button" onClick={this.addToCart}>Add to Cart</ul>
                <ShoppingCartOutlinedIcon onClick={this.addToCart} style={{ height: 50, width: 50, paddingTop: 13 }} />
            </div>
        )
    }
}

export default ShoppingCart;