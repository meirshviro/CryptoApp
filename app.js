const express = require('express')
const config = require('config')
const app = express()
const port = config.get('app.port')
const host = config.get('app.host');

const http = require('http')

const auth = require('./middlewares/auth')
const notFound = require('./middlewares/404')
const error = require('./middlewares/error')

const welcome = require('./routes/welcome')
const adminRoute = require('./routes/admin')
const userRoute = require('./routes/user')
const gitHubRoute = require('./routes/github')

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(auth);

app.use('/', welcome);
app.use('/admin', adminRoute);
app.use('/user', userRoute);
app.use('/gitHub', gitHubRoute);

app.use(notFound);
app.use(error);

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`)
  })