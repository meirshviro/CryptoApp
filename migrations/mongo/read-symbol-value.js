const mongoose = require('mongoose');
const moment = require('moment');

const symbolSchema = new mongoose.Schema({
        symbol: String,
        value: Number,
        timestamp: Date,
    });

const SymbolValue = mongoose.model('SymbolValue', symbolSchema);

(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/mymongo');
    console.log('mongo connected');

    const symbolValue = await SymbolValue.findOne({
        symbol: 'BTC'
    })
    console.log(symbolValue);
})()    

