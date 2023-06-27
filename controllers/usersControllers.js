


const dashboard = async (req, res, next) => {
    try {
        const promises = [];
        userSymbols.forEach((userSymbol) => promises.push(SymbolValue.findOne({symbol: userSymbol.symbol}).sort({createdAt : -1}).limit(1)))
        const symbolValues = await Promise.all(promises);
        console.log('aaaaaa')
        res.render('users/addSymbol', {
            symbolValues
        })
    } catch (err) {
        next(err);
    }
}

module.exports = {
    dashboard
}