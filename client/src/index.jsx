import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MainPage from '/Users/moshfeqshahrani/Documents/Zappies/client/src/MainPage.jsx'
import ProductDetail from '/Users/moshfeqshahrani/Documents/Zappies/client/src/ProductDetail.jsx';
import ShoppingCart from '/Users/moshfeqshahrani/Documents/Zappies/client/src/ShoppingCart.jsx'
import Dropdown from './ColorsDropdown.jsx';
import StarRatings from '/Users/moshfeqshahrani/Documents/Zappies/client/src/StarRatings.jsx'
import './styles.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      image: '',
      description: [],
      nextPage: false
    }
    this.getMensShoes = this.getMensShoes.bind(this);

  }
  getMensShoes = () => {
    // const options = {
    //   method: 'GET',
    //   url: 'https://zappos1.p.rapidapi.com/categories/list',
    //   headers: {
    //     'x-rapidapi-key': 'fa300790c6msh1f0a61b57b1d3ecp1e914djsn75574964670f',
    //     'x-rapidapi-host': 'zappos1.p.rapidapi.com'
    //   },
    //   data: [
    //     {facetField: 'zc1', values: ['Shoes']}
    //     //{facetField: 'zc2', values: ['Swimwear', 'Underwear & Intimates']},
    //     //{facetField: 'txAttrFacet_Gender', values: ['Mens']}
    //   ]
    // };
    // const options = {
    //   method: 'POST',
    //   url: 'https://zappos1.p.rapidapi.com/products/list',
    //   params: {limit: '100', page: '1'},
    //   headers: {
    //     'content-type': 'application/json',
    //     'x-rapidapi-key': 'fa300790c6msh1f0a61b57b1d3ecp1e914djsn75574964670f',
    //     'x-rapidapi-host': 'zappos1.p.rapidapi.com'
    //  },
    //   data: [
    //     {facetField: 'zc1', values: ['Shoes']},
    //    // {facetField: 'zc2', values: ['Swimwear', 'Underwear & Intimates']},
    //     {facetField: 'txAttrFacet_Gender', values: ['Men']}
    //   ]
    // };

    // axios.request(options).then((response) => {
    //   console.log(response.data)
    //   let list = [];
    //   for (let i = 0; i < response.data.nodes[0].nodes[1].nodes.length; i++) {
    //     list.push(response.data.nodes[0].nodes[1].nodes[i].name)
    //   }
    //   this.setState({
    //     items: list
    //   })
    //   console.log(list)
    // }).catch((error) => {
    //   console.error(error);
    // });
    //console.log('testing', list)
    this.setState({
      nextPage: true
    })
  }





  render() {
    if (this.state.nextPage) {
      return (
        <div>
          <ProductDetail />
        </div>
      )
    } else {
      return (<div>
        Zappies
        <MainPage />
        <div>
          <ul>
            {this.state.items.map(item => (
              <li>{item}</li>
            ))}
          </ul>
          <button onClick={this.getMensShoes}>Products</button>
        </div>
      </div>)
    }
  }
  
}

ReactDOM.render(<App />, document.getElementById('app'));