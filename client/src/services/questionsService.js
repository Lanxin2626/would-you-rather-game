const baseUrl = 'http://localhost:3001';

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