import React, {useState} from "react";
import "./Contact.css";
import win from "../../Images/win.jpg";

import { saveAs } from "file-saver";


export default function Contact() {


  const [toggleNum, setToggleNum] = useState(false);
  const [toggleMail, setToggleMail] = useState(false);
  const [toggleLink, setToggleLink] = useState(false);
  const [toggleGit, setToggleGit] = useState(false);

  const numAppear = () => {
    setToggleNum(!toggleNum)
  }
  const mailAppear = () => {
    setToggleMail(!toggleMail)
  }
  const linkAppear = () => {
    setToggleLink(!toggleLink)
  }
  const gitAppear = () => {
    setToggleGit(!toggleGit)
  }


  const saveFile = () => {
    saveAs(
      './Jérémy_Turpin_CV.pdf'
    )
  }

  return (
    <div>
      <h1 className="subMenuTitle">Contactez moi</h1>
      <p className="instructions">Cliquez sur l'information pour la rendre visible.</p>
      <div
        className="contactContent"
        style={{ backgroundImage: `url(${win})` }}
      >
        <div className="gouttes">
          <div className="goutteElement">
            <div className="shadow shadow1"></div>
            <div onClick={numAppear} className="goutte goutte1">
              <p>Téléphone</p>
            </div>
            {toggleNum && (
            <p className="textAppear">07-82-89-05-87</p>
            )}
          </div>

          <div className="goutteElement">
            <div className="shadow shadow2"></div>
            <div onClick={mailAppear} className="goutte goutte2">
              <p>Email</p>
            </div>
            {toggleMail && (
              <p className="textAppear">turpinjeremy.pro@gmail.com</p>
            )}
          </div>
          <div className="window"><div className="handle"></div></div>
          <div className="goutteElement">
            <div className="shadow shadow3"></div>
            <div onClick={linkAppear} className="goutte goutte3">
              <p>LinkedIn</p>
            </div>
            {toggleLink && (
              <a className="textAppear" href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-turpin-617087181/">Mon LinkedIn</a>
            )}
          </div>

          <div className="goutteElement">
            <div className="shadow shadow4"></div>
            <div onClick={gitAppear} className="goutte goutte4">
              <p>Github</p>
            </div>
            {toggleGit && (
              <a className="textAppear" href="https://github.com/BersakerPro?tab=repositories">Mon GitHub</a>
            )}
          </div>
        </div>
      </div>
      <button className="downloadBtn"><a href={require("./Jérémy_Turpin_CV.pdf")} download="CV_Turpin_Jérémy">Télécharger mon CV</a></button>
    </div>
  );
}
