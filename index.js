//const dataBase = require('./mongoose.js')
const path = require('path');
const express = require('express');
const app = express();
const router = express.Router()
const exphbs = require('express-handlebars')

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended:false }))



//import route
const postsRoute = require('./routes/post');
//connect our main index js to our post.js that handels the user.
app.use( postsRoute.app);
//sign up page
app.get('/signUp', function (req, res) {
      res.render('signUp.hbs');
})
//sign in page
app.get('/signIn', (req, res) =>{
    res.render('signIn.hbs');
})



//start listening to the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log (`Servers is up ${PORT}`)
})


// my static site
app.use(express.static(path.join(__dirname, 'public')));
//handle bars middle ware
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

//get test
///app.get('/api/members', (req, res) => {
 //   res.json(members);
//});
app.get('/', (req, res) => res.render('index.hbs'))





