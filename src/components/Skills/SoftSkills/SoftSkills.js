import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function SoftSkills() {
  return (
    <div className="skillsList">
      <div className="skillsCapsList">
        <div className="skillsCapsListCol">
          <div className="skillsCaps softCaps">
            <h4>Créativité</h4>
            <div className="stars">
              <StarIcon fontSize="smaller" />
              <StarIcon fontSize="smaller" />
              <StarHalfIcon fontSize="smaller" />
            </div>
          </div>
          <div className="skillsCaps softCaps">
            <h4>Adaptation</h4>
            <div className="stars">
              <StarIcon fontSize="smaller" />
              <StarIcon fontSize="smaller" />
              <StarIcon fontSize="smaller" />
            </div>
          </div>
          <div className="skillsCaps softCaps">
            <h4>Rigueur</h4>
            <div className="stars">
              <StarIcon fontSize="smaller" />
              <StarIcon fontSize="smaller" />
              <StarHalfIcon fontSize="smaller" />
            </div>
          </div>
          <div className="skillsCaps softCaps">
            <h4>Gestion du stress</h4>
            <div className="stars">
              <StarIcon fontSize="smaller" />
              <StarIcon fontSize="smaller" />
              <StarHalfIcon fontSize="smaller" />
            </div>
          </div>
          <div className="skillsCaps softCaps">
            <h4>Esprit d'équipe</h4>
            <div className="stars">
              <StarIcon fontSize="smaller" />
              <StarIcon fontSize="smaller" />
              <StarBorderIcon fontSize="smaller" />
            </div>
          </div>
        </div>
        <div className="skillsCapsListCol">
          <div className="skillsCaps softCaps">
            <h4>Sens critique</h4>
            <div className="stars">
              <StarIcon fontSize="smaller" />
              <StarIcon fontSize="smaller" />
              <StarHalfIcon fontSize="smaller" />
            </div>
          </div>
          <div className="skillsCaps softCaps">
            <h4>Autonomie</h4>
            <div className="stars">
              <StarIcon fontSize="smaller" />
              <StarIcon fontSize="smaller" />
              <StarHalfIcon fontSize="smaller" />
            </div>
          </div>
          <div className="skillsCaps softCaps">
            <h4>Prise de décision</h4>
            <div className="stars">
              <StarIcon fontSize="smaller" />
              <StarIcon fontSize="smaller" />
              <StarHalfIcon fontSize="smaller" />
            </div>
          </div>
          <div className="skillsCaps softCaps">
            <h4>Éloquence</h4>
            <div className="stars">
              <StarIcon fontSize="smaller" />
              <StarIcon fontSize="smaller" />
              <StarIcon fontSize="smaller" />
            </div>
          </div>
        </div>
      </div>
      <div className="skillsTextList">
        <p>Capacité à travailler sous pression</p>
        <p>Multitasking</p>
        <p>Capacité à suivre les instructions</p>
        <p>Volonté d'obtenir des résultats de qualité</p>
        <p>Bonne présentation orale</p>
      </div>
    </div>
  );
}
