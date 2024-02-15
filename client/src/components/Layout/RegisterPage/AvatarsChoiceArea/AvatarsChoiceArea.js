import React from 'react';
import { uploadAvatar } from '../../../../services/usersService';
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

const AvatarsChoiceArea = ({ setAvatarURL }) => {
  const handleAvatarChange = (event) => {
    console.log(event.target.value);
    setAvatarURL(event.target.value);
  };
  const handleAvatarUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const avatarURL = await uploadAvatar(file);
        setAvatarURL(avatarURL);
      } catch (error) {
        console.error('Error during avatar upload:', error);
      }
    }
  }

  return (
    <div className='avatarsChoiceArea'>
      <label className="image-radio">
      <input type="radio" name="option" value={dragonImage} hidden onChange={handleAvatarChange}/>
      <img src={dragonImage} alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value={dogImage} hidden onChange={handleAvatarChange}/>
      <img src={dogImage} alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value={rabbitImage} hidden onChange={handleAvatarChange}/>
      <img src={rabbitImage} alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value={doberImage} hidden onChange={handleAvatarChange}/>
      <img src={doberImage} alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="file" name="upload" accept="image/*" hidden onChange={handleAvatarUpload}/>
      <img src={addImage} alt='' className='avatarsUpload'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value={duckImage} hidden onChange={handleAvatarChange}/>
      <img src={duckImage} alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value={pandaImage} hidden onChange={handleAvatarChange}/>
      <img src={pandaImage} alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value={penguinImage} hidden onChange={handleAvatarChange}/>
      <img src={penguinImage} alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value={bearImage} hidden onChange={handleAvatarChange}/>
      <img src={bearImage} alt='' className='avatarsOption'/>
      </label>
    </div>
  )
}

export default AvatarsChoiceArea
