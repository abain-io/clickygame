import React from "react";

class Header extends React.Component {

  render() {
    return (
      <div className="header-wrapper">
        <h1 className="start-game-header-text">Click A Picture To Begin</h1>
        <br />
        <h4>The goal of this game is to click on the images without clicking on the same image twice</h4>
      </div>
    );
  }

}

export default Header;