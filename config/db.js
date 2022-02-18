/**
 * db.js
 *
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Due Date: Feb 19, 2022
 * Modify Date: Feb 18, 2022
 *
 * @link   db.js
 * @file   This file define the configuration of DB
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

module.exports = 
{
    "URI":  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.qqhoz.mongodb.net/myportfolio?retryWrites=true&w=majority`
}