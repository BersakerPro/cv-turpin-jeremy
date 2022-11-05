import React, {useState, useEffect} from 'react'
import './NavBar.css'


import NavBarDesk from './NavBarDesk';
import NavbarRes from './NavbarRes';

export default function NavBar() {



  const [width, setWidth] = useState(window.innerWidth)


  useEffect(() => {

    const changeWidth = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize' , changeWidth)
    }
  }, [])

  return (
    <>
    {width > 1000 ? (
      <NavBarDesk />
    ) : (
      <NavbarRes />
    )}
    </>
  )
}
