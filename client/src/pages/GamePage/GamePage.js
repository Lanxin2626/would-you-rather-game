import React, { useEffect, useState } from 'react'
import PlayGame from '../../components/Layout/GamePage/PlayGame/PlayGame'
import AnswerResult from '../../components/Layout/GamePage/AnswerResult/AnswerResult'
import NavBar from '../../components/Common/NavBar'
import './GamePage.css'
import { useLocation } from 'react-router-dom';
import { getQuestionById } from '../../services/questionsService'


const GamePage = () => {
  const location = useLocation();
  const { questionId, isAnswered } = location.state || {};

  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestionData = async () => {
      try {
        setLoading(true);
        const data = await getQuestionById(questionId);
        setQuestion(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (questionId) {
      fetchQuestionData();
    }
  }, [questionId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!question) {
    return <div>No question data found</div>;
  }
  if(isAnswered){
    return(
      <div className='contianer'>
      <NavBar />
      <div className='content'>
        <div className='gamePage'>
          <AnswerResult question={question} questionId={questionId} />
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className='contianer'>
      <NavBar />
      <div className='content'>
        <div className='gamePage'>
          <PlayGame question={question} questionId={questionId}/>
        </div>
      </div>
    </div>
  )
}

export default GamePage
