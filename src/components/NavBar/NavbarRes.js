import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import FaceIcon from '@mui/icons-material/Face';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CallIcon from '@mui/icons-material/Call';

export default function NavbarRes() {

    const [toggleMenu, setToggleMenu] = useState(false);

    const openMenu = () => {
        setToggleMenu(!toggleMenu)
      }

  return (
    <div>
        <nav className='nav-res'>
      <h1 className='name'>Jérémy <br/> Turpin</h1>
      <button className='btn btn-res' onClick={openMenu}><KeyboardDoubleArrowRightIcon/></button>
      {(toggleMenu) && (

        <div className='navbar navbar-res'>
        <NavLink 
        to="/home"
        className={({isActive}) => {
          return isActive ? "activeLink" : "unActive"
        }}
        ><FaceIcon/></NavLink>
        
        <NavLink 
        to="/experience"
        className={({isActive}) => {
          return isActive ? "activeLink" : "unActive"
        }}
        ><WorkHistoryIcon /></NavLink>
        
        <NavLink 
        to='/skills'
        className={({isActive}) => {
          return isActive ? "activeLink" : "unActive"
        }}
        ><WorkspacePremiumIcon /></NavLink>
        
        <NavLink 
        to="/contact"
        className={({isActive}) => {
          return isActive ? "activeLink" : "unActive"
        }}
        ><CallIcon /></NavLink>
      </div>
        )}
    </nav>
    </div>
  )
}
