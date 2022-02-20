/**
 * populate_user.js
 *
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Due Date: Feb 19, 2022
 * Modify Date: Feb 19, 2022
 *
 * @link   populate_user.js
 * @file   This file execute the db population on the table User
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

const User = require('../models/user');

// create a new user in the DB
/* REGISTER SOME USERS */
User.register({username:'paul', active: false, email: 'paul@gmail.com', phoneNumber: '12323213'}, 'paul@2022');
User.register({username:'jay', active: false, email: 'jay@gmail.com', phoneNumber: '12323213'}, 'jay@@2022');
User.register({username:'roy', active: false, email: 'roy@gmail.com', phoneNumber: '12323213'}, 'roy@@2022');