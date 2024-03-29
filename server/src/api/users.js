const express = require('express');
const jwt = require('jsonwebtoken');
const { _getUsers } = require('../utils/_DATA');
const multer = require('multer');
const path = require('path');
const { createUser, validatePassword, getUserInfoById, getLeaderBoard } = require('../utils/_ManageUsers');

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
    const { username, password, avatarURL } = req.body;
    const newUser = await createUser({ id: username.toLowerCase().replace(/\s+/g, ''), username, password, avatarURL });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets/avatars-upload'); 
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

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  if (username) {
    try {

      const user = await validatePassword(username, password);

      if (user) {
        const token = jwt.sign(
          { userId: user.id },
          'your-secret-key',
          { expiresIn: '1h' }
        );

        res.json({ message: "Login successful", user: user, token: token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

  }
});

router.get('/getUserInfo', async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'your-secret-key', async (err, decoded) => {
    if (err) return res.sendStatus(403);
    try {
      const userId = decoded.userId;
      const userInfo = await getUserInfoById(userId);
      console.log(userId);
      console.log(userInfo);
      res.json(userInfo);
    } catch {
      res.status(500).send('Internal Server Error');
    }
  });
})

router.get('/getLeaderBoard', async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  try {
    const leaderBoard = await getLeaderBoard();
    res.json(leaderBoard);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

})

module.exports = router;