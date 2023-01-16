const path = require('path');
const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

// handle static file
app.use(express.static(path.join(__dirname, 'public')));

// Set views engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Router
const router = require('./routes/index.route');
router(app);

// listen app
app.listen(3000, () => console.log(`\nRunning at http://localhost:${3000}`));
