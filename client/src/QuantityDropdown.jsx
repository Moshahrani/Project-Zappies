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

    let range = this.props.quantity > 15 ? 15 : this.props.quantity;
    let amount = [];
    for (let i = 1; i <= range; i++) {
      amount.push(i);
    }
    let sizePicked = "-";
    if (this.props.size) {
      if (this.props.amount) {
        sizePicked = this.props.amount;
      } else {
        sizePicked = "1";
      }
    }

    return (
      <div>
        Quantity
        <button onClick={this.showMenu}>
          {sizePicked}
        </button>

        {
          this.state.showMenu
            ? (
              <div className="menu">
                {amount.map((item, index) => (
                  <button value={item} onClick={this.props.chooseAmount} key={index}>{item}</button>

                ))}

              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
export default QuantityDropdown;