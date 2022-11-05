import React from "react";
import "./Exp.css";
import Card from "./Card/Card";
import school from "../../Images/lycee.png";
import think from "../../Images/thinking.png";
import food from "../../Images/food.png";
import chef from "../../Images/chef.png";
import pizza from "../../Images/pizza.png";
import second from "../../Images/second.png";
import learning from "../../Images/learning.png";
import challenge from "../../Images/challenge.png";
import cuv from "../../Images/cuv.png";

export default function Exp() {
  return (
    <div>
      <h1 className="subMenuTitle">Mon histoire</h1>
      <article className="comic">
        <div className="panel">
          <p className="text top-left">Annecy, </p>
          <img src={school} alt="school" />
          <p className="text bottom-right">Après mon bac scientifique...</p>
        </div>
        <div className="panel">
          <img src={think} alt="thinking" />
          <p className="text bottom-right">
            ...Je devais faire un choix entre mes deux passions: la cuisine ou
            l'informatique. Mais à des fins d'indépendance financière
            immédiate...
          </p>
        </div>
        <div className="panel">
          <p className="text top-left">
            ...J'ai finalement choisis la cuisine...
          </p>
          <img src={food} alt="food" />
        </div>
        <div className="panel">
          <p className="text bottom-right">
            J'ai fait mes classes dans un grand palace d'Annecy, l'impérial
            Palace. Cette formation a duré une année.
          </p>
          <img src={chef} alt="chef" />
        </div>
        <div className="panel">
          <p className="text top-left">
            Puis je suis devenu chef de cuisine dans une pizzeria pendant 4 ans.
            J'ai eu l'occasion de gérer une équipe de 6 personnes.
          </p>
          <img src={pizza} alt="pizza" />
        </div>
        <div className="panel">
          <p className="text top-left">
            Enfin j'ai évolué durant 6 ans dans un restaurant côté en qualité de
            second de cuisine...
          </p>
          <img src={second} alt="second" />
          <p className="text bottom-right">.. et patîssier</p>
        </div>
        <div className="panel">
          <p className="text top-left">
            Il y a 1 an, j'ai voulu relever un nouveau challenge, après quelques
            expériences dans le développement, j'ai voulu en faire mon métier.
          </p>
          <img src={challenge} alt="bus" />
        </div>
        <div className="panel">
          <p className="text bottom-right">
            J'ai effectué une formation de développeur front-end web et mobile
            que j'ai validé en août 2022.
          </p>
          <img src={learning} alt="learn" />
        </div>
        <div className="panel">
          <p className="text top-left">
            Diplôme en poche, et fort de tout ce que j'ai appris pendant un an,
            je suis prêt à intégrer le monde du numérique.
          </p>
          <img src={cuv} alt="cv" />
          <p className="text bottom-right">To be continued...</p>
        </div>
      </article>
      <Card />
    </div>
  );
}
