module.exports = async function (req, res, next) {

    if(!/^\/(user)/.test(req.path))
        return next();

    if(!req.method.includes(['PATCH', 'DELETE'])){
         if( req.path.match(/\/user\/(\d+)/) == null)
            return next();
    }

    const  id  = Number(req.path.match(/\/user\/(\d+)/)[1]);

    // check if it is a number
    if(! ~~id === id)
        return res.send('err param validation, please send a number');

    // check if position exist
    if(id > req.payload.users.length)
        return res.send('err param validation, please send betweeen 1 - 3');

    next();
};