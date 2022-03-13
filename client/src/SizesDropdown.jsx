/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDom from 'react-dom';

class SizesDropdown extends React.Component {
  constructor() {
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
    let option = 'Select Size';
    if (this.props.size) {
      option = this.props.size;
    }

    return (
      <div className="dropdown" style={{ width: "200px" }} >
        <div className="button" onClick={this.showMenu}> Select Size </div>
        {this.state.showMenu ? (
          <ul id="dd">
            {this.props.sizes.map((item, index) => (
              <li value={item} onClick={this.props.getSize} key={index}>{item}</li>
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
export default SizesDropdown;


// return (
//   <div>
//     <button type="button" onClick={this.showMenu}>
//       {option}
//     </button>

//     {
//       this.state.showMenu
//         ? (
//           <div className="menu">
//             {this.props.sizes.map((item, index) => (
//               <button type="button" value={item} onClick={this.props.getSize} key={index}>{item}</button>

//             ))}

//           </div>
//         )
//         : (
//           null
//         )
//     }
//   </div>
// );
// }