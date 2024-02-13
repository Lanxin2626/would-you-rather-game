import React from 'react'
import './NewPoll.css'

const NewPoll = () => {

  return (
    <div className='newPoll'>
      <div className='newPoll_Title'>
        <p>
          Create a New Poll
        </p>
      </div>
      <div className='newPoll_Content'>
        <p>
        <span>Complete a question:</span><br></br>
          Would you rather...
        </p>
        <form className='newPoll_Form' action='#'>
          <input type='text' className='textInput_Form'/>
          <p className='or-special-design'>or</p>
          <input type='text' className='textInput_Form'/>
          <input type='submit' value={'Submit'} className='btn_Submit'/>
        </form>
      </div>
    </div>
  )
}

export default NewPoll
