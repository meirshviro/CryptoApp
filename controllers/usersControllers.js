const UserSymbol = require('../models/mysql/user-symbol');

const dashboard = async (req, res, next) => {
    try {
        const promises = [];
        userSymbols.forEach((userSymbol) => promises.push(SymbolValue.findOne({symbol: userSymbol.symbol}).sort({createdAt : -1}).limit(1)))
        const symbolValues = await Promise.all(promises);
        res.render('users/addSymbol', {
            symbolValues
        })
    } catch (err) {
        next(err);
    }
}

const addSymbol = async (req, res, next) => {
    try {
        const userSymbol = new UserSymbol(req.db);
        await userSymbol.add({
            userId: req.user.id,
            symbol: req.body.symbol,
        });
        res.redirect('/users/dashboard');
    } catch (err) {
        next(err);
    }
}

module.exports = {
    dashboard,
    addSymbol
}