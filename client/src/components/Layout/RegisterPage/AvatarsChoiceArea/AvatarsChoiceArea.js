import React from 'react';
import { uploadAvatar } from '../../../../services/usersService';
import './AvatarsChoiceArea.css';
import addImage from '../../../../assets/tool-Image/plus.png';

const AvatarsChoiceArea = ({ setAvatarURL }) => {
  const handleAvatarChange = (event) => {
    console.log(event.target.value);
    setAvatarURL(event.target.value);
  };

  return (
    <div className='avatarsChoiceArea'>
      <label className="image-radio">
      <input type="radio" name="option" value='/Avatars-origin/dragon.png' hidden onChange={handleAvatarChange}/>
      <img src='/Avatars-origin/dragon.png' alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value='/Avatars-origin/dog.png'hidden onChange={handleAvatarChange}/>
      <img src='/Avatars-origin/dog.png' alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value='/Avatars-origin/rabbit.png'hidden onChange={handleAvatarChange}/>
      <img src='/Avatars-origin/rabbit.png' alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value='/Avatars-origin/dober.png' hidden onChange={handleAvatarChange}/>
      <img src='/Avatars-origin/dober.png' alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value='/Avatars-origin/cat.png' hidden onChange={handleAvatarChange}/>
      <img src='/Avatars-origin/cat.png' alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value='/Avatars-origin/duck.png' hidden onChange={handleAvatarChange}/>
      <img src='/Avatars-origin/duck.png' alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value='/Avatars-origin/panda.png' hidden onChange={handleAvatarChange}/>
      <img src='/Avatars-origin/panda.png' alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value='/Avatars-origin/penguin.png' hidden onChange={handleAvatarChange}/>
      <img src='/Avatars-origin/penguin.png' alt='' className='avatarsOption'/>
      </label>
      <label className="image-radio">
      <input type="radio" name="option" value='/Avatars-origin/bear.png' hidden onChange={handleAvatarChange}/>
      <img src='/Avatars-origin/bear.png' alt='' className='avatarsOption'/>
      </label>
    </div>
  )
}

export default AvatarsChoiceArea
