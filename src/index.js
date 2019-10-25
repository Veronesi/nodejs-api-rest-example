const express = require('express');
const app = express();
const setResources = require('./middlewares/setResources');
const checkParams = require('./middlewares/checkParams');
/* --- settings --- */
app.set('json spaces', 2);

/* --- import routes --- */
const routesUser = require('./routes/user');

/* --- Middlewares --- */
app.use(setResources);
app.use(checkParams);

/*  ---  routes  ---  */
app.use('/user', routesUser);
app.use(function (req, res) {
    res.send('Ups! page not found');
});

app.listen('3000', function () {
    console.log(`server run on http://localhost:3000`);
});

