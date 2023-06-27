const express = require('express');
const router = express.Router();

const signUp = async (req, res) => {
  res.status(200).send('sign up with github');
};

router.get('/', signUp);

module.exports = router;