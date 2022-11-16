import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBarDesk() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const openMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      <nav className="navContent">
        <h1 className="name">Jérémy Turpin</h1>
        <div className="navBtn">
          <button className="menuBtn" onClick={openMenu}>
            <MenuIcon />
          </button>
          {toggleMenu && (
            <div className="navbar navbar-desk">
              <NavLink
                to="/home"
                className={({ isActive }) => {
                  return isActive ? "activeLink" : "unActive";
                }}
              >
                Infos
              </NavLink>

              <NavLink
                to="/experience"
                className={({ isActive }) => {
                  return isActive ? "activeLink" : "unActive";
                }}
              >
                Expériences
              </NavLink>

              <NavLink
                to="/skills"
                className={({ isActive }) => {
                  return isActive ? "activeLink" : "unActive";
                }}
              >
                Compétences
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive ? "activeLink" : "unActive";
                }}
              >
                Contact
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
