const express = require('express');
const app = express();
const pug = require('pug');
app.set('view engine', 'pug');
app.set('views', 'views');

// require('dotenv/config');


// import routes;
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);
app.use(express.static('resources'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'views'));

//Routes
app.get('/', (req, res) => {
	res.render('homepage');
});
app.get('/teamstats', (req, res) => {
	res.render('teamStats');
})
app.get('/standings', (req, res) => {
	res.render('standings');
})
app.get('/hockeyresources', (req, res) => {
	res.render('hockeyresources');
})

app.listen(4000, function () {
	console.log('listening on port 4000');
})