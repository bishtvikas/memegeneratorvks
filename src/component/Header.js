import React from "react";

function Header() {
  const logo = require("../images/Logo.png");
  return (
    <div className="header--box">
      <div className="header--logo">
        <img src={logo} alt="logo" className="header--logo--img"></img>
       </div>
      <div className="header--title--box">
        <p className="header--title">React Course - Project 3</p>
      </div>
    </div>
  );
}

export default Header;
