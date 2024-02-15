const { _getUsers, _addUser } = require('./_DATA.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function createUser({ id, username: name, avatarURL, password }) {
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

                    _addUser(name, newUser);

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

module.exports = {
    createUser,
    validatePassword
};