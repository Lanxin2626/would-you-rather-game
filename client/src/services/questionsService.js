const baseUrl = 'http://lanxin-would-you-rather-game.online';

export const getAllQuestions= async()=>{
    try {
        const response = await fetch(`${baseUrl}/api/questions/getAllQuestions`,{
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw new Error('userInformation page fail to show');
        }  
      }catch(error){
        throw error;
      }
}
export const getQuestionById = async(questionId)=>{
    try {
        const response = await fetch(`${baseUrl}/api/questions/getQuestionById/${questionId}`,{
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw new Error('Question page failed to show');
        }  
      }catch(error){
        throw error;
      }

}

export const saveUserAnswer= async(authedUser, questionId, answer)=>{
  try{
    const response =await fetch(`${baseUrl}/api/questions/saveUserAnswer`,{
      method: 'POST',
      headers: {        
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`},
      body: JSON.stringify({ authedUser, questionId, answer })
    })
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Vote failed, sorry for that');
    }
  }catch(error){
    throw error;
  }
}
export const addQuestion= async(optionOneText, optionTwoText, author, authorAvatar)=>{
  try{
    const response =await fetch(`${baseUrl}/api/questions/saveQuestion`,{
      method: 'POST',
      headers: {        
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`},
      body: JSON.stringify({optionOneText, optionTwoText, author, authorAvatar})
    })
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Add Poll failed, sorry for that');
    }
  }catch(error){

  }
}