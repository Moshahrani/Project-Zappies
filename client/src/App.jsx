import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MainPage from './MainPage.jsx'
import ProductDetail from './ProductDetail.jsx';

//import './styles.css';


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
    return (<div id="app" className="app">
      <h1>
        Zappies
      </h1>

      <MainPage />
      <div >
        <button type="button" className="getShoes" onClick={this.getMensShoes}>Products</button>
      </div>
    </div>
    )
    }
  }

}

export default App;
