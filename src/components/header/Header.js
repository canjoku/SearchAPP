import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const activeStyle = { color: "#F15B2A" }
  return (
    <div>
      <NavLink to="/" activeStyle={activeStyle}exact>Home</NavLink> |
      <NavLink to="/about" activeStyle={activeStyle}> About</NavLink>
    </div>
  )
}


export default Header;