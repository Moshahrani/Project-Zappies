import React from 'react';
import ProductDetail from './ProductDetail.jsx';

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
