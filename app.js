const express = require('express')
const path = require('path');
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

//view engine setup (ejs)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//app.use(auth);

app.use('/', welcome);
app.use('/admin', adminRoute);
app.use('/user', userRoute);
app.use('/gitHub', gitHubRoute);

app.use(notFound);
app.use(error);

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`)
  });

// The following line of codes listens for the following events uncaughtException, 
// unhandledRejection, and SIGTERM respectively, 
// and shut down the server once either one of them occurs.
process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
});

process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
      console.log('💥 Process terminated!');
    });
});