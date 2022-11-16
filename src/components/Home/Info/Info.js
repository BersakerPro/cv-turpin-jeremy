import React from 'react'
import { useState } from 'react'
import Image from '../../../Images/moi.jpg'
import Clip from '../../../Images/clip.png'
import './Info.css'


export default function Info() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}  
    className="card">
    <div className="imgBox">
      <div className="bark"></div>
      <div className="lin">Turpin J.</div>
      <h2>QUI SUIS-JE ?</h2>
    </div>
    {isOpen && 
    <div className="details">
      <img className='pic' src={Image} alt="pic"/>
      <img className='clip' src={Clip} alt="picofclip"/>
        <p>Name : Turpin Jérémy</p>
        <p>Birth : 07 Mai 1989</p>
        <p>Place of birth : Nice</p>
        <p>Age : 32</p>
        <p>Localisation : Vichy</p>
        <p>Country : France</p>
        <p>Permis B + véhicule</p>
    </div>
    }
  </div>
  )
}
