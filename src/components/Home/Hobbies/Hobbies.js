import React, {useState} from 'react'
import './Hobbies.css'

import { hobImages } from "./CarouselData"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'


export default function Hobbies() {

  const [currImg, setCurrImg] = useState(0)

  return (
    <div className='carousel'>
      <div className="carouselInner" style={{ backgroundImage: `url(${hobImages[currImg].img})`}}>
        <div className="left"
        onClick={() => {
          currImg > 0 && setCurrImg(currImg - 1)
        }}
        >
          <ArrowBackIosIcon />
        </div>
        <div className="center">
          <h2 className='title'>{hobImages[currImg].title}</h2>
        </div>
        <div className="right"
        onClick={() => {
          currImg < hobImages.length -1 && setCurrImg(currImg + 1)
        }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  )
}
