import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function NavBarDesk() {

    const [toggleMenu, setToggleMenu] = useState(false);

    const openMenu = () => {
        setToggleMenu(!toggleMenu)
      }

  return (
    <div>
        <nav>
      <h1 className='name'>Jérémy <br/> Turpin</h1>
      <button className='btn' onClick={openMenu}>Menu <KeyboardDoubleArrowRightIcon/></button>
      {(toggleMenu) && (

        <div className='navbar navbar-desk'>
        <NavLink 
        to="/home"
        className={({isActive}) => {
          return isActive ? "activeLink" : "unActive"
        }}
        >Infos</NavLink>
        
        <NavLink 
        to="/experience"
        className={({isActive}) => {
          return isActive ? "activeLink" : "unActive"
        }}
        >Expériences</NavLink>
        
        <NavLink 
        to='/skills'
        className={({isActive}) => {
          return isActive ? "activeLink" : "unActive"
        }}
        >Compétences</NavLink>
        
        <NavLink 
        to="/contact"
        className={({isActive}) => {
          return isActive ? "activeLink" : "unActive"
        }}
        >Contact</NavLink>
      </div>
        )}
    </nav>
    </div>
  )
}
