/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDom from 'react-dom';

class QuantityDropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      quantities: [],
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    const range = this.props.quantity > 15 ? 15 : this.props.quantity;
    const amount = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= range; i++) {
      amount.push(i);
    }
    let sizePicked = 'Quantity';
    if (this.props.size) {
      if (this.props.amount) {
        sizePicked = this.props.amount;
      } 
    }

    return (
      <div className="dropdown" style={{ width: "75px" }} >
        <div className="button" onClick={this.showMenu} style={{ width: "75px" }} >{sizePicked}</div>
        {this.state.showMenu ? (
          <ul id="dd" style={{ width: "75px" }} >
            {amount.map((item, index) => (
              <li value={item} onClick={this.props.chooseAmount} key={index}>{item}</li>
            ))}
          </ul>
        )
          :
          (
            null
          )
        }
      </div>
    )
  }
}
export default QuantityDropdown;


// return (
  //   <div>
  //     Quantity
  //     <button type="button" id="showMenu" onClick={this.showMenu}>
  //       {sizePicked}
  //     </button>

  //     {
  //       this.state.showMenu
  //         ? (
  //           <div className="menu">
  //             {amount.map((item, index) => (
  //               <li value={item} onClick={this.props.chooseAmount} key={index}>{item}</li>

  //             ))}

  //           </div>
  //         )
  //         : (
  //           null
  //         )
  //     }
  //   </div>
  // );