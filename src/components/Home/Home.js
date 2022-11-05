import React, {useState} from 'react'
import Info from './Info/Info'
import './Home.css'
import Hobbies from './Hobbies/Hobbies'
import BluetoothAudioIcon from '@mui/icons-material/BluetoothAudio';
import WifiIcon from '@mui/icons-material/Wifi';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CallIcon from '@mui/icons-material/Call';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function Home() {


  const [unLock, setUnlock] = useState(false);

  return (
    <div className='home'>
      <p className='instructions'>Extrêmement motivé pour développer constamment mes compétences, je suis à la recherche d'un poste de <strong>développeur front-end</strong>.</p>
      <br/>
      <p className='instructions'>Je me spécialise dans l'<strong>intégration</strong> et le <strong>design de contenu</strong> mais je suis ouvert à tout type de projet me permettant d'évoluer <strong>à long terme</strong> au sein d'une entreprise.</p>
      <br/>
      <p className='instructions'>J'ai le matériel et les qualités pour <strong>télétravailler</strong> efficacement.</p>
      <div className='content'>
      <h1 className='homeTitle'>Informations :</h1>
      <Info />
      </div>
      <div className='content'>
      <h1 className='homeTitle'>Hobbies :</h1>
      <div
      onMouseEnter={() => setUnlock(true)}
      onMouseLeave={() => setUnlock(false)} 
      className="phone">
        <div className="phone-icons-top">
          <BluetoothAudioIcon fontSize='smaller'/>
          <WifiIcon fontSize='smaller'/>
          <SignalCellularAltIcon fontSize='smaller'/>
          <Battery5BarIcon fontSize='smaller'/>
        </div>
        <div className="lock">
          {unLock ?
            <LockOpenIcon />: <LockIcon />
          }
        </div>
        <Hobbies />
        <div className="phone-icons-bottom">
          <CallIcon fontSize='small'/>
          <span
          className='fingerPrint'><FingerprintIcon fontSize='large'/>
          </span>
          <CameraAltIcon fontSize='small'/>
        </div>
      </div>
      </div>
    </div>
  )
}
