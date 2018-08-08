let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('content/bio', { 
    title: 'Bio' 
  });
});


/* GET about page. */
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
