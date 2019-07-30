import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const Header = props => {
  return (
    <nav className="header App-header">
      <h1 className="header-title" style={{ color: props.color }}>
        <NavLink to="/">
          Demo APP
        </NavLink>
      </h1>
      <h3 className="header-title" style={{ color: props.color }}>
          {props.title}
      </h3>
      <div className="links">
        <NavLink exact activeClassName='is-active' isActive={(a, b) => handleIsActive(b, "/persons")} to="/" className="m-2">Persons</NavLink>
        <NavLink exact activeClassName='is-active' to="/current-time" className="m-2">Current time</NavLink>        
      </div>
    </nav>
  );
 
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string
};

function handleIsActive(b, c) {
  if(c)
    return b.pathname.startsWith(c);
    return false;
}
