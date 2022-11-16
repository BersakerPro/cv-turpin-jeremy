import React from 'react'
import './Card.css'
import { CardData } from './CardData'

export default function Card() {
  return (
  <div>
    <h3>Projet réalisés avant et après ma formation :</h3>
    <div className='contentCard'>
        {CardData.map((item) => {
          return (
            <section>
              <h2>{item.titre}</h2>
              <div className='flexContent'>
              <div className="linkCard">
                <a target="_blanck" href={item.url}>
                  <img className='imgCard' alt={item.alt} src={item.image}/>
                </a>
                <p>{item.langage}</p>
              </div>
              <div className="textCard">
                <p>{item.description}</p>
              </div>
              </div>
            </section>
          )
        })}      
    </div>
  </div>   
  )
}
      