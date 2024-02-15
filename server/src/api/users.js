const express = require('express');
const jwt = require('jsonwebtoken');
const { _getUsers } = require('../utils/_DATA');
const multer = require('multer');
const path = require('path');
const {createUser} =require('../utils/_ManageUsers');
const {validatePassword} =require('../utils/_ManageUsers');

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const users = await _getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/register', async (req, res) => {
    try {
      const { username, password, avatarURL} = req.body;
      const newUser = await createUser({ id: username, username, password, avatarURL});
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'assets/avatars-upload'); // 保存的路径
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
const upload = multer({ storage });

router.post('/upload-avatar', upload.single('avatar'), (req, res) => {
    if (req.file) {
     const avatarURL = `/avatars-upload/${req.file.filename}`;
      res.json({ avatarURL });
    } else {
      res.status(400).send('No file uploaded');
    }
  });

router.post('/login',(req,res)=>{
    const { username, password } = req.body;
    const user= username;
    try{
        if(user)
        {
            validatePassword(username,password)
            .then(user =>{
                const token = jwt.sign(
                    { userId: user.id }, 
                    'your-secret-key',  
                    { expiresIn: '1h' } 
                  );
                  sessionStorage.setItem('token',token);
                res.json({ message: "Login successful", token });
            })  
        }
    }catch(error){
        res.status(401).json({ message: error.message });
    }
  });
  function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }
router.get('/userInfo', (req, res)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
  
    if (token == null) return res.sendStatus(401); 
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) return res.sendStatus(403); 

    const userId = decoded.userId;
    const userInfo = getUserInfoById(userId);
    res.json(userInfo)
    });
})
  

module.exports = router;