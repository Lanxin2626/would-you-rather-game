const baseUrl = 'http://localhost:3001';

export const registerUser = async (username, password,avatarURL) => {
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
        throw new Error('Login failed');
      }
    } catch (error) {
      throw error;
    }
  };