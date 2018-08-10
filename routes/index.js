/*
File name: index.js
Author's name: Awen Xu
Student number: 300992536
Website: Mini Portfolio
Date Created: Aug 08, 2018
Latest Revision: Aug 10, 2018
File description: This is the JavaScript file for routing, accessing different 'pages' of the mini portfolio. 
*/

let express = require('express');
let router = express.Router();

/* GET bio page. */
router.get('/', function(req, res, next) {
  res.render('content/bio', { 
    title: 'Bio' 
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('content/projects', { 
    title: 'Projects'
 });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('content/contact', { 
    title: 'Contact'
 });
});

module.exports = router;
