const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const courses = require('./routes/courses');
const home = require('./routes/hoem');
const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...');
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
