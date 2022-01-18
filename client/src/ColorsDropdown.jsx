import React from 'react';
import ReactDom from 'react-dom';

class ColorsDropdown extends React.Component {
  constructor(props) {
    super();

    this.state = {
      showMenu: false,
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
    if (!this.state.showMenu) {
      return (
        <div id="menu" className="colors">
          <button type="button" id="showMenu" onClick={this.showMenu}>
            Colors
          </button>
        </div>
      )
    } else {
      return (<div id="showShoes">
        {
          this.state.showMenu
            ? (
              <div id="showShoe" className="showShoe">
                {this.props.colors.map((item, index) => (
                  <button type="button" id="printShoeProp" value={item} onClick={this.props.printShoe} key={index}>{item}
                  </button>
                ))}
              </div>
            )
            : (
              null
            )
        }
      </div>
      )
  }

  }
}
export default ColorsDropdown;


