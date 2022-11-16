import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import FaceIcon from "@mui/icons-material/Face";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CallIcon from "@mui/icons-material/Call";
import QuizIcon from '@mui/icons-material/Quiz';

export default function NavbarRes() {
  return (
    <div>
      <nav className="nav-res navContent">
        <h1 className="name">Jérémy Turpin</h1>
        <div className="navBtn">
          <div className="navbar navbar-res">
            <NavLink
              to="/home"
              className={({ isActive }) => {
                return isActive ? "activeLink" : "unActive";
              }}
            >
              <FaceIcon />
            </NavLink>

            <NavLink
              to="/experience"
              className={({ isActive }) => {
                return isActive ? "activeLink" : "unActive";
              }}
            >
              <WorkHistoryIcon />
            </NavLink>

            <NavLink
              to="/skills"
              className={({ isActive }) => {
                return isActive ? "activeLink" : "unActive";
              }}
            >
              <WorkspacePremiumIcon />
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive ? "activeLink" : "unActive";
              }}
            >
              <CallIcon />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
