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
      <div className="dropdown" style={{ width: "200px" }} >
        <div className="button" onClick={this.showMenu}> Colors </div>
        {this.state.showMenu ? (
          <ul id="dd">
            {this.props.colors.map((item, index) => (
              <li value={item} onClick={this.props.printShoe} key={index}>{item}</li>
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
export default ColorsDropdown;


// if (!this.state.showMenu) {
//   return (
//     <div id="menu" className="colorsButton" onClick={this.showMenu}>
//       Colors
//     </div>
//   )
// } else {
//   return (<div className="ddList">
//     {
//       this.state.showMenu
//         ? (
//           <div className="ddContent">
//             {this.props.colors.map((item, index) => (
//               <p className="dd-color-item" key={index}>
//                 <button type="button" id="printShoeProp" value={item} onClick={this.props.printShoe} key={index}>
//                   <span>{item}</span>
//                 </button>
//               </p>
//             ))}
//           </div>
//         )
//         : (
//           null
//         )
//     }
//   </div>
//   )
// }