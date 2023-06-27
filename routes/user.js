const express = require('express');
const router = express.Router();

const welcomeUser = async (req, res) => {
  res.send('welcome to user dashboard');
};

router.get('/welcomeUser', welcomeUser);

module.exports = router;