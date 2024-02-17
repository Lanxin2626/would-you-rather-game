const { _getUsers, _addUser } = require('./_DATA.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function createUser({ id, username:name, avatarURL, password }) {
  console.log('Line 8 '+id);
  const users = await _getUsers();
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (users[id]) {
                return rej(new Error('User already exists'));
            }
            else {
                bcrypt.hash(password, saltRounds, function (err, hash) {
                    if (err) {
                        return rej(err);
                    }
                    const newUser = {
                        id,
                        name,
                        avatarURL,
                        password:hash, 
                        answers: {},
                        questions: []
                    };

                    _addUser(id, newUser);

                    res(newUser);
                })
            }
        }, 1000);
    });
}

async function validatePassword(username, password) {
  const users = await _getUsers();
    return new Promise((res, rej) => {
      const user = users[username];
      console.log(username)
      console.log(users);
      if (!user) {
        return rej(new Error('User not found'));
      }
  
      bcrypt.compare(password, user.password, function(err, result) {
        if (err) {
          return rej(err);
        }
        if (result) {
          res(user); 
        } else {
          rej(new Error('Password is incorrect')); 
        }
      });
    });
  }

  async function getUserInfoById(userId){
    const users = await _getUsers();
    const usersArray = Object.values(users);
    usersArray.sort((user1, user2) => {
      const user1Activity = user1.questions.length + Object.keys(user1.answers).length;
      const user2Activity = user2.questions.length + Object.keys(user2.answers).length;
      return user2Activity - user1Activity;
    });

      const user=usersArray.find(user => user.id === userId);
      user.rank=usersArray.indexOf(user)+ 1;
      //console.log("getUserInfoById "+ user);
      return user;

  }

  async function getLeaderBoard(){
    const users = await _getUsers();
    const usersArray = Object.values(users);
    usersArray.sort((user1, user2) => {
      const user1Activity = user1.questions.length + Object.keys(user1.answers).length;
      const user2Activity = user2.questions.length + Object.keys(user2.answers).length;
      return user2Activity - user1Activity;
    });
    return usersArray;

  }


module.exports = {
    createUser,
    validatePassword,
    getUserInfoById,
    getLeaderBoard
};