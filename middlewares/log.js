const logAdmin = (req, res, next) => {
    console.log(req);
    next();
}

const logGuest = (req, res, next) => {
    console.log(req);
    next();
}

module.exports = {
    logAdmin,
    logGuest
};
