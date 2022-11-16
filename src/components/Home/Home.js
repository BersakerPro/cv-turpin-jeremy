import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Info from "./Info/Info";
import "./Home.css";
import Hobbies from "./Hobbies/Hobbies";
import BluetoothAudioIcon from "@mui/icons-material/BluetoothAudio";
import WifiIcon from "@mui/icons-material/Wifi";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Battery5BarIcon from "@mui/icons-material/Battery5Bar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CallIcon from "@mui/icons-material/Call";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export default function Home() {
  const [unLock, setUnlock] = useState(false);

  return (
    <div className="home">
      <div className="firstContent">
        <div className="instructions">
          <p>
            Extrêmement motivé pour développer constamment mes compétences, je
            suis à la recherche d'un poste de{" "}
            <strong>développeur front-end</strong>.
          </p>
          <br />
          <p>
            Je me spécialise dans l'<strong>intégration</strong> et le{" "}
            <strong>design de contenu</strong> mais je suis ouvert à tout type
            de projet me permettant d'évoluer <strong>à long terme</strong> au
            sein d'une entreprise.
          </p>
          <br />
          <p>
            J'ai le matériel et les qualités pour{" "}
            <strong>télétravailler</strong> efficacement.
          </p>
        </div>
        <div className="content">
          <Info />
        </div>
      </div>
      <div className="content">
        <div
          onMouseEnter={() => setUnlock(true)}
          onMouseLeave={() => setUnlock(false)}
          className="phone"
        >
          <div className="phone-icons-top">
            <BluetoothAudioIcon fontSize="smaller" />
            <WifiIcon fontSize="smaller" />
            <SignalCellularAltIcon fontSize="smaller" />
            <Battery5BarIcon fontSize="smaller" />
          </div>
          <div className="lock">{unLock ? <LockOpenIcon /> : <LockIcon />}</div>
          <Hobbies />
          <div className="phone-icons-bottom">
            <CallIcon fontSize="small" />
            <span className="fingerPrint">
              <FingerprintIcon fontSize="large" />
            </span>
            <CameraAltIcon fontSize="small" />
          </div>
        </div>
      </div>
        <p className="continu">Continuez votre visite vers <NavLink to="/experience" className="navContinu">mes expériences</NavLink></p>
    </div>
  );
}
