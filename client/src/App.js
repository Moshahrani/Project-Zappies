import React from 'react';
import ProductDetail from './ProductDetail.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    
    return (
      <div>
        <ProductDetail />
      </div>
    )
  }
}

export default App;
