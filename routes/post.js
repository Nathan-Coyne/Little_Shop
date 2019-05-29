
const express = require('express');
const app = express();
const Post = require('../model/Post');




//routes to create user
app.post('/user', (req, res) =>{    
    const post = new Post({
        userName: req.body.username,
        password: req.body.password,
        email: req.body.email,
        
    });
    res.redirect('/');
    console.log(post.email);
    Post.findOne({email: req.body.email}).then (email => {
    if (email === null){    
    Post.findOne({userName: req.body.username}).then(user => {
        if(user === null){
        post.save()
        console.log('new user created')
        }else{console.log(user.userName +'user found')}
    })
    .catch((error) => {
        console.log('user found' + error);
    })
    }else{
        console.log('email already exists')}
    })
})
//sign in route
app.post('/member', (req, res) =>{
    Post.findOne({userName: req.body.username}).then(user => {
        console.log(user);
        if (user.password === req.body.password){
            console.log('you\'re in');
            //userPage
            res.render('Index-User.hbs', {username: req.body.username});
        }
        else{res.render('signIn.hbs', {error: 'username or password is invalid'});}
    }).catch((error) => {
                res.render('signIn.hbs', {error: 'username or password is invalid'});
    })
        
})




module.exports = {
    app,
}