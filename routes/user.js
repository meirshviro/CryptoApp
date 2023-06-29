const express = require('express');

const joiValidator = require('../middlewares/joi');
const dbConnect = require('../middlewares/db-connect');
const mongo = require('../middlewares/mongo');

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

router.use('/mysql',dbConnect)
router.use('/mongo',mongo)

module.exports = router;