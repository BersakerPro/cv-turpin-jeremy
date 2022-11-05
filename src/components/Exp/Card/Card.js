import React from 'react'
import './Card.css'
import { CardData } from './CardData'

export default function Card() {
  return (
  <div>
    <h1 className='subMenuTitle'>Mes projets :</h1>
    <div className='contentCard'>
        {CardData.map((item) => {
          return (
            <section>
              <h2>{item.titre}</h2>
              <div className="linkCard">
                <a target="_blanck" href={item.url}>
                  <img className='imgCard' alt={item.alt} src={item.image}/>
                </a>
                <p>{item.langage}</p>
              </div>
              <div className="textCard">
                <p>{item.description}</p>
              </div>
            </section>
          )
        })}      
    </div>
  </div>   
  )
}
      