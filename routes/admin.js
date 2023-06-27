const express = require('express');
const router = express.Router();

const welcomeAdmin = async (req, res) => {
  res.send('welcome to admin dashboard');
};

router.get('/admin', welcomeAdmin);

module.exports = router;