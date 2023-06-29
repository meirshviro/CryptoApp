const express = require('express');
const router = express.Router();

const welcome = async (req, res) => {
    res.render('welcome')
    //res.status(200).send('welcome guest');
};

router.get('/', welcome);

module.exports = router;
