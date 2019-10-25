module.exports = async function (req, res, next) {
    if (/^\/(user)/.test(req.path)) {
        req.payload = [];
        req.payload.users = [{id: 1,name: 'juse'},{id: 2,name: 'pro'},{id: 3,name: 'arias'}];
    }
    next();
};