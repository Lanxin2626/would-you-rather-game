import React from 'react'
import './Decoration.css'
import dogImage from '../../../../assets/Avatars-origin/dog.png';
import dragonImage from '../../../../assets/Avatars-origin/dragon.png';
import pandaImage from '../../../../assets/Avatars-origin/panda.png';
import duckImage from '../../../../assets/Avatars-origin/duck.png';
import rabbitImage from '../../../../assets/Avatars-origin/rabbit.png';
import doberImage from '../../../../assets/Avatars-origin/dober.png';
import penguinImage from '../../../../assets/Avatars-origin/penguin.png';
import bearImage from '../../../../assets/Avatars-origin/bear.png';
import catImage from '../../../../assets/Avatars-upload/cat.png';
const Decoration = () => {
  return (
    <div className='decoration'>
      <img src={dragonImage} alt='' className='avatarsHoverBar'/>
      <img src={dogImage} alt='' className='avatarsHoverBar'/>
      <img src={pandaImage} alt='' className='avatarsHoverBar'/>
      <img src={duckImage} alt='' className='avatarsHoverBar'/>
      <img src={catImage} alt='' className='avatarsHoverBar'/>
      <img src={doberImage} alt='' className='avatarsHoverBar'/>
      <img src={rabbitImage} alt='' className='avatarsHoverBar'/>
      <img src={penguinImage} alt='' className='avatarsHoverBar'/>
      <img src={bearImage} alt='' className='avatarsHoverBar'/>
    </div>
  )
}

export default Decoration
