import React from 'react';
import './AvatarsChoiceArea.css';
import dogImage from '../../../../assets/Avatars-origin/dog.png';
import dragonImage from '../../../../assets/Avatars-origin/dragon.png';
import pandaImage from '../../../../assets/Avatars-origin/panda.png';
import duckImage from '../../../../assets/Avatars-origin/duck.png';
import rabbitImage from '../../../../assets/Avatars-origin/rabbit.png';
import doberImage from '../../../../assets/Avatars-origin/dober.png';
import penguinImage from '../../../../assets/Avatars-origin/penguin.png';
import bearImage from '../../../../assets/Avatars-origin/bear.png';
import addImage from '../../../../assets/tool-Image/plus.png';

const AvatarsChoiceArea = () => {
  return (
    <div className='avatarsChoiceArea'>
      <img src={dragonImage} alt='' className='avatarsOption'/>
      <img src={dogImage} alt='' className='avatarsOption'/>
      <img src={pandaImage} alt='' className='avatarsOption'/>
      <img src={duckImage} alt='' className='avatarsOption'/>
      <img src={addImage} alt='' className='avatarsUpload'/>
      <img src={doberImage} alt='' className='avatarsOption'/>
      <img src={rabbitImage} alt='' className='avatarsOption'/>
      <img src={penguinImage} alt='' className='avatarsOption'/>
      <img src={bearImage} alt='' className='avatarsOption'/>
    </div>
  )
}

export default AvatarsChoiceArea
