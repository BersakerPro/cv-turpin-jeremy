import React from 'react'
import './HardSkills.css'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function HardSkills() {
  return (
  <div className="skillsList">
    <div className="skillsCapsList">
    <div className="skillsCaps">
        <h4>ANGLAIS</h4>
        <div className="stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        </div>
      </div>
      <div className="skillsCaps">
        <h4>HTML</h4>
        <div className="stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        </div>
      </div>
      <div className="skillsCaps">
        <h4>CSS</h4>
        <div className="stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        </div>
      </div>
      <div className="skillsCaps">
        <h4>SASS</h4>
        <div className="stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        </div>
      </div>
      <div className="skillsCaps">
        <h4>JS</h4>
        <div className="stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        </div>
      </div>
      <div className="skillsCaps">
        <h4>NODE</h4>
        <div className="stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarHalfIcon />
        <StarBorderIcon />
        </div>
      </div>
      <div className="skillsCaps">
        <h4>REACT</h4>
        <div className="stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        </div>
      </div>
      <div className="skillsCaps">
        <h4>REDUX</h4>
        <div className="stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        </div>
      </div>
      <div className="skillsCaps">
        <h4>GIT</h4>
        <div className="stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        </div>
      </div>
      <div className="skillsCaps">
        <h4>ARDUINO</h4>
        <div className="stars">
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        </div>
      </div>
    </div>
    <div className="skillsTextList">
      <p>Intégration d'une maquette</p>
      <p>Création en design libre</p>
      <p>Création de site e-commerce</p>
      <p>Création d'APi sécurisée avec Node.js</p>
      <p>Bonne maîtrise de React et Redux</p>
      <p>Connaissance en React Native</p>
      <p>Optimisation d'un SEO</p>
    </div>
  </div>
  )
}
