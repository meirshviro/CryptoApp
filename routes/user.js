const express = require('express');
const joiValidator = require('../middlewares/joi');
const userValidators = require('../validators/usersValidators');
const router = express.Router();

const welcomeUser = async (req, res) => {
  res.status(200).send('welcome to user dashboard');
};

const addSymbol = async (req, res) => {
    res.status(200).send('adding symbol');
  };

router.get('/',welcomeUser);

router.post('/addSymbol',joiValidator(userValidators),addSymbol)

module.exports = router;