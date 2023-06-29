const mongoose = require('mongoose');

module.exports = async (req, res, next) => {
    await mongoose.connect('mongodb://127.0.0.1:27017/mymongo');
    console.log('connected');
    req.mongo = mongoose;
    res.status(200).send('Connected to mongoDB!')
}