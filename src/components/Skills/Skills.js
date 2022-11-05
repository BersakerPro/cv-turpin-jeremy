import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Skills.css'
import SchoolIcon from '@mui/icons-material/School';

export default function Skills() {
  return (
    <div className='skillsContent'>
      <h1 className='subMenuTitle'>Mes compétences</h1>
      <nav>
        <NavLink to='/skills/hardskills'
        className={({isActive}) => {
          console.log(isActive);
          return isActive ? "activeSkills" : "unActiveSkills"
        }}
        >Hard Skills</NavLink>
        <NavLink to='/skills/softskills'
        className={({isActive}) => {
          console.log(isActive);
          return isActive ? "activeSkills" : "unActiveSkills"
        }}
        >Soft Skills</NavLink>
      </nav>
      <Outlet />
      <h1 className='subMenuTitle'>Mes diplômes</h1>
      <div className="diplomes">
        <div className="diplome">
          <SchoolIcon />
          <h4 className="diplomeTitle">Diplôme d'études secondaires</h4>
          <p className='diplomeText'>Filière scientifique</p>
          <p>2008</p>
        </div>
        <div className="diplome">
          <SchoolIcon />
          <h4 className="diplomeTitle">Développeur, Intégrateur web</h4>
          <p className='diplomeText'>RNCP 36076, Bac + 2</p>
          <p>2021-2022</p>
        </div>
        <div className="diplome">
          <SchoolIcon />
          <h4 className="diplomeTitle">Certificat de formation</h4>
          <p className='diplomeText'>React - Redux</p>
          <p>2022</p>
        </div>
      </div>
    </div>
  )
}
