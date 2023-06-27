const express = require('express');
const router = express.Router();
const dbConnect = require('../middlewares/db-connect');

const welcomeAdmin = async (req, res) => {
  res.status(200).send('welcome to admin dashboard');
};

router.get('/', welcomeAdmin);
router.use('/mysql',dbConnect)

module.exports = router;