import React from 'react';
import ProductDetail from './ProductDetail.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    // if (this.state.nextPage) {
    return (
      <div>
        <ProductDetail />
      </div>
    )
  }
}

export default App;
