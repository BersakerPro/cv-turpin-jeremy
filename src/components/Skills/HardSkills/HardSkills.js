import React from 'react'
import './HardSkills.css'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function HardSkills() {
  return (
  <div className="skillsList">
    <div className="skillsCapsList">
      <div className='skillsCapsListCol'>
    <div className="skillsCaps">
        <h4>ANGLAIS</h4>
        <div className="stars">
        <StarIcon fontSize='smaller'/>
        <StarIcon fontSize='smaller'/>
        <StarHalfIcon fontSize='smaller'/>
        </div>
      </div>
      <div className="skillsCaps">
        <h4>HTML</h4>
        <div className="stars">
        <StarIcon fontSize='smaller'/>
        <StarIcon fontSize='smaller'/>
        <StarIcon fontSize='smaller'/>
        </div>
      </div>
      <div className="skillsCaps">
        <h4>CSS</h4>
        <div className="stars">
        <StarIcon fontSize='smaller'/>
        <StarIcon fontSize='smaller'/>
        <StarIcon fontSize='smaller'/>
        </div>
      </div>
      <div className="skillsCaps">
        <h4>SASS</h4>
        <div className="stars">
        <StarIcon fontSize='smaller'/>
        <StarIcon fontSize='smaller'/>
        <StarHalfIcon fontSize='smaller'/>
        </div>
      </div>
      <div className="skillsCaps">
        <h4>JS</h4>
        <div className="stars">
        <StarIcon fontSize='smaller'/>
        <StarIcon fontSize='smaller'/>
        <StarHalfIcon fontSize='smaller'/>
        </div>
      </div>
      </div>
      <div className="skillsCapsListCol">
      <div className="skillsCaps">
        <h4>NODE</h4>
        <div className="stars">
        <StarIcon fontSize='smaller'/>
        <StarIcon fontSize='smaller'/>
        <StarBorderIcon fontSize='smaller'/>
        </div>
      </div>
      <div className="skillsCaps">
        <h4>REACT</h4>
        <div className="stars">
        <StarIcon fontSize='smaller'/>
        <StarIcon fontSize='smaller'/>
        <StarHalfIcon fontSize='smaller'/>
        </div>
      </div>
      <div className="skillsCaps">
        <h4>REDUX</h4>
        <div className="stars">
        <StarIcon fontSize='smaller'/>
        <StarIcon fontSize='smaller'/>
        <StarBorderIcon fontSize='smaller'/>
        </div>
      </div>
      <div className="skillsCaps">
        <h4>GIT</h4>
        <div className="stars">
        <StarIcon fontSize='smaller'/>
        <StarIcon fontSize='smaller'/>
        <StarHalfIcon fontSize='smaller'/>
        </div>
      </div>
      <div className="skillsCaps">
        <h4>ARDUINO</h4>
        <div className="stars">
        <StarIcon fontSize='smaller'/>
        <StarBorderIcon fontSize='smaller'/>
        <StarBorderIcon fontSize='smaller'/>
        </div>
      </div>
      </div>
    </div>
    <div className="skillsTextList">
      <p>Int??gration d'une maquette</p>
      <p>Cr??ation en design libre</p>
      <p>Cr??ation de site e-commerce</p>
      <p>Cr??ation d'APi s??curis??e avec Node.js</p>
      <p>Bonne ma??trise de React et Redux</p>
      <p>Connaissance en React Native</p>
      <p>Optimisation d'un SEO</p>
    </div>
  </div>
  )
}
