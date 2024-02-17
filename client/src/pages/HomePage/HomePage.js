import React,{useState,useEffect} from 'react'
import IsAnswerBar from '../../components/Layout/HomePage/IsAnswersBar/IsAnswerBar'
import QuestionsList from '../../components/Layout/HomePage/QuestionsList/QuestionsList'
import NavBar from '../../components/Common/NavBar'
import './HomePage.css'
import { getUserInfo } from '../../services/usersService'
import { getAllQuestions } from '../../services/questionsService'

const HomePage = () => {
  const [isAnswer, setIsAnswer]=useState(false);
  const [unQuestionsSet, setUnQuestionsSet]=useState([]);
  const [anQuestionsSet, setAnQuestionsSet]=useState([]);

  useEffect(() => {
    const loadingData = async () => {
      try {
        const questions = await getAllQuestions();
        const userInfo = await getUserInfo();
  
        const sortedQuestions = Object.values(questions).sort((a, b) => b.timestamp - a.timestamp);
  
        setUnQuestionsSet(sortedQuestions.filter(question => !userInfo.answers.hasOwnProperty(question.id)));
        setAnQuestionsSet(sortedQuestions.filter(question => userInfo.answers.hasOwnProperty(question.id)));
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    loadingData();
  }, [isAnswer]);

  useEffect(() => {

  }, [unQuestionsSet, anQuestionsSet]);
  
  if(unQuestionsSet.length===0&&anQuestionsSet.length===0)
  {
    return(
      <div className='container'>
      <NavBar />
      <div className='content'>
        <div className='homePageContent'>
          <IsAnswerBar isAnswer={isAnswer} setIsAnswer={setIsAnswer}/>
          <div><h2>questions is Loading</h2></div>
        </div>
      </div>
      </div>
    )
  }
  return (
    <div className='container'>
      <NavBar/>
      <div className='content'>
        <div className='homePageContent'>
          <IsAnswerBar isAnswer={isAnswer} setIsAnswer={setIsAnswer}/>
          <QuestionsList questionsSet={unQuestionsSet} style={{ display: !isAnswer ? 'block' : 'none' }}isAnswered={isAnswer} btnText={'Answer this poll'}/>
          <QuestionsList questionsSet={anQuestionsSet} style={{ display: isAnswer ? 'block' : 'none' }} isAnswered={isAnswer}btnText={'view this poll'}/>
        </div>
      </div>
    </div>
  )
};

export default HomePage