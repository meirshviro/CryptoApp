const mongoose = require('mongoose');
const SymbolValue = require('../models/mongo/symbol-value');

(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/mymongo');
    console.log('mongo connected');

    const symbolValue = new SymbolValue({
        symbol: 'BTC',
        value: Math.random()*100000+1000,
        timestamp: new Date(),
    })

    await symbolValue.save();

    console.log('adding symbol: '+symbolValue.symbol+
    ' with value: '+symbolValue.value);

    // Interval to update every 10 seconds
    async function updateSymbol(){
        const symbolValue = await SymbolValue.findOne({
            symbol: 'BTC'
        })
    
        symbolValue.value =  Math.random()*100000+1000;
        symbolValue.timestamp = new Date();

        await symbolValue.save();
    
        console.log('update symbol: '+symbolValue.symbol+
        ' with value: '+symbolValue.value);
    }
    setInterval(updateSymbol,5000);
})();  