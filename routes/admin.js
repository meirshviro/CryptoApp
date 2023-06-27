const express = require('express');
const router = express.Router();

const welcomeAdmin = async (req, res) => {
  res.status(200).send('welcome to admin dashboard');
};

router.get('/', welcomeAdmin);

module.exports = router;