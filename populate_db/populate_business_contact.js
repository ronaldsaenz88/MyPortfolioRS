/**
 * populate_business_contact.js
 *
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Due Date: Feb 19, 2022
 * Modify Date: Feb 19, 2022
 *
 * @link   populate_business_contact.js
 * @file   This file execute the db population on the table BusinessContact
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

 const BusinessContactModel = require('../models/business_contact');

 // create a new user in the DB
 /* REGISTER SOME CONTACTS */

 // Create an instance of model SomeModel
var bcontact_instance_1 = new BusinessContactModel({first_name:'Ronald', last_name: 'Saenz', email: 'ronald@gmail.com', phone_number: '12323213'});
var bcontact_instance_2 = new BusinessContactModel({first_name:'Carles', last_name: 'Puyol', email: 'puyol@gmail.com', phone_number: '12323213'});
var bcontact_instance_3 = new BusinessContactModel({first_name:'Cristiano', last_name: 'Ronaldo', email: 'cr7@gmail.com', phone_number: '12323213'});
var bcontact_instance_4 = new BusinessContactModel({first_name:'Lionel', last_name: 'Messi', email: 'messi@gmail.com', phone_number: '12323213'});
var bcontact_instance_5 = new BusinessContactModel({first_name:'Zinedine', last_name: 'Zidane', email: 'zidane@gmail.com', phone_number: '12323213'});
var bcontact_instance_6 = new BusinessContactModel({first_name:'Damian', last_name: 'Diaz', email: 'ddiaz@gmail.com', phone_number: '12323213'});
var bcontact_instance_7 = new BusinessContactModel({first_name:'Gonzalo', last_name: 'Plata', email: 'gplata@gmail.com', phone_number: '12323213'});
var bcontact_instance_8 = new BusinessContactModel({first_name:'Matias', last_name: 'Oyola', email: 'moyola@gmail.com', phone_number: '12323213'});
var bcontact_instance_9 = new BusinessContactModel({first_name:'Ronaldinho', last_name: 'Gaucho', email: 'ronaldinho@gmail.com', phone_number: '12323213'});
var bcontact_instance_10 = new BusinessContactModel({first_name:'Ronaldo', last_name: 'Nazairo', email: 'ronaldo@gmail.com', phone_number: '12323213'});
var bcontact_instance_11 = new BusinessContactModel({first_name:'Matias', last_name: 'Saenz', email: 'msaenz@gmail.com', phone_number: '12323213'});
var bcontact_instance_12 = new BusinessContactModel({first_name:'Mohammed', last_name: 'Salah', email: 'msalah@gmail.com', phone_number: '12323213'});
var bcontact_instance_13 = new BusinessContactModel({first_name:'Moises', last_name: 'Caicedo', email: 'mcaicedo@gmail.com', phone_number: '12323213'});

// Save the new model instance, passing a callback
bcontact_instance_1.save(function (err) { if (err) return handleError(err); });
bcontact_instance_2.save(function (err) { if (err) return handleError(err); });
bcontact_instance_3.save(function (err) { if (err) return handleError(err); });
bcontact_instance_4.save(function (err) { if (err) return handleError(err); });
bcontact_instance_5.save(function (err) { if (err) return handleError(err); });
bcontact_instance_6.save(function (err) { if (err) return handleError(err); });
bcontact_instance_7.save(function (err) { if (err) return handleError(err); });
bcontact_instance_8.save(function (err) { if (err) return handleError(err); });
bcontact_instance_9.save(function (err) { if (err) return handleError(err); });
bcontact_instance_10.save(function (err) { if (err) return handleError(err); });
bcontact_instance_11.save(function (err) { if (err) return handleError(err); });
bcontact_instance_12.save(function (err) { if (err) return handleError(err); });
bcontact_instance_13.save(function (err) { if (err) return handleError(err); });