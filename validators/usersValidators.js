const joi = require('joi');

// validate - required symbol as alphanumeric string with length between 3-5
const addSymbolValidator = joi.object({
    symbol: joi.string().required().min(3).max(5).alphanum().uppercase()
});

module.exports = addSymbolValidator