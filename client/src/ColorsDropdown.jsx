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
    return (
      <div id="colors" className="colors">
        <button type="button" onClick={this.showMenu}>
          Colors
        </button>

        {
          this.state.showMenu
            ? (
              <div className="menu">
                {this.props.colors.map((item, index) => (
                  <button type="button" value={item} onClick={this.props.printShoe} key={index}>{item}</button>

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
export default ColorsDropdown;
