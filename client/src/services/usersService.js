const baseUrl = 'http://localhost:3001';

export const registerUser = async (username, password, avatarURL) => {
  const response = await fetch(`${baseUrl}/api/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, avatarURL })
  });
  if (!response.ok) {
    throw new Error('Registration failed');
  }
  return response.json();
};

export const uploadAvatar = async (file) => {
    const formData = new FormData();
    formData.append('avatar', file);
  
    try {
      const response = await fetch(`${baseUrl}/upload-avatar`, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.avatarURL;
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };
  export const login = async (username, password) => {
    try {  
      const response = await fetch(`${baseUrl}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Login failed, password is incorrect');
      }
    } catch (error) {
      throw error;
    }
  };
  export const getUserInfo = async ()=>{
    try {
      const response = await fetch(`${baseUrl}/api/users/getUserInfo`,{
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
  export const getLeaderBoard = async () =>{
    try{
      const response = await fetch(`${baseUrl}/api/users/getLeaderBoard`,{
        method:'GET',
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Leader board fail to show');
      }  
    }catch(error){
      throw error;
    }

  }
