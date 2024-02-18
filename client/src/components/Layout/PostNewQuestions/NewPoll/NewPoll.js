import React,{useState}from 'react'
import { useHistory } from 'react-router-dom';
import './NewPoll.css'
import { addQuestion } from '../../../../services/questionsService';

const NewPoll = () => {
  const[optionOne,setOptionOne]=useState('');
  const[optionTwo,setOptionTwo]=useState('');
  const history = useHistory();
  const user=JSON.parse(sessionStorage.getItem('currentUser'))
  const handleSubmit = async(e) => {
    e.preventDefault();
    await addQuestion(optionOne,optionTwo,user.id,user.avatarURL);
    console.log(optionOne,optionTwo,user.id,user.avatarURL);

    history.push('/homePage');
  };

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
        <form className='newPoll_Form' onSubmit={handleSubmit}>
          <input type='text' className='textInput_Form' placeholder='type option one' 
          value={optionOne} onChange={(e)=>setOptionOne(e.target.value.replace(/[^a-zA-Z0-9\s]/g, ''))} required/>
          <p className='or-special-design'>or</p>
          <input type='text' className='textInput_Form' placeholder='type option two' 
          value={optionTwo} onChange={(e)=>setOptionTwo(e.target.value.replace(/[^a-zA-Z0-9\s]/g, ''))} required/>
          <input type='submit' value={'Submit'} className='btn_Submit'/>
        </form>
      </div>
    </div>
  )
}

export default NewPoll
