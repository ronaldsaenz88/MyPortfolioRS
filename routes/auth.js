/**
 * auth.js
 *
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Due Date: Feb 19, 2022
 * Modify Date: Feb 19, 2022
 *
 * @link   auth.js
 * @file   This file defines the routes required for authentication
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

var express = require('express');
var router = express.Router();

const passport = require('passport');
const User = require('../models/user');

/* Get Login */
router.get('/login', function(req,res,next)
{
    // check the login error message
    let messages= req.session.message || [];
    req.session.message = []; //clear out any session message
    res.render('login', {title: "Please enter your credentials", message: messages, user: req.user })
});

/* POST /login */
//use passport to authenticate the login attempt
router.post('/login', 
    passport.authenticate('local', { 
        failureRedirect: '/auth/login',
        failureMessage: 'Invalid Login'
    }), 
    function(req, res) {
        res.redirect('/business_contact_list');
});

/* Get /logout */
router.get('/logout', (req,res,next)=>{
    req.logout()
    res.redirect('/auth/login')
});


// Registration - Works well, but it was commented because it is not required to show 
/*
// GET /register  
router.get('/register', function(req, res) {
    res.render('register', {title: "Registration Page", user: req.user })
});

// POST /register  
// Password pass as a separate parameter for hashing
router.post('/register', function(req, res, next) {
    console.log('registering user');
    User.register(new User({username: req.body.username, email:req.body.email, phoneNumber: req.body.phoneNumber}), req.body.password, function(err) {
        if (err) {
            console.log('error while user register!', err);
            return next(err);
        }
        console.log('user registered!');
        res.redirect('/auth/login');
    });
});
*/

module.exports = router;