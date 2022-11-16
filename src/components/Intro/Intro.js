import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Intro.css'

export default function NotFound() {

    const navigate = useNavigate()

  return (
    <div className='welcomeHome'>
        <h1 className='welcomeTitle'>Bienvenue sur mon CV interactif</h1>
        <h2 className='welcome'>J'ai conçu ce site pour vous présenter mon profil et mes 
        compétences d'une autre manière, plus ludique et agréable qu'une 
        succession de lignes sur une page de cv classique.</h2>
        <h3 className='welcome'>Entièrement réalisé de zéro, avec REACT et aucun template n'a été utilisé.</h3>
        <h3 className='welcome'>Temps de lecture estimé : 5-10 min</h3>
        <button className='btnBack' onClick={() => navigate("/home")}>Découvrir mon CV</button>
    </div>
  )
}
