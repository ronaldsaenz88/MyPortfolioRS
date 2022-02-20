/**
 * setup.js
 *
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Due Date: Feb 19, 2022
 * Modify Date: Feb 19, 2022
 *
 * @link   setup.js
 * @file   This file defines the strategy used to configure the authentication using Passport Library
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

const User = require('../models/user');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

//method which attempts to authenticate with the strategy 
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;