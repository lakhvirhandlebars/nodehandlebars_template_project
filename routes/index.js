var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'MY Portfolio', someVariable: 'example' });
});

router.get('/about', function(req, res, next) 
{
  res.render('about', { title: 'About Me', someVariable: 'example' });
});

router.get('/myproject', function(req, res, next) 
{
  res.render('myproject', { title: 'My Projects', someVariable: 'example' });
});

router.get('/contactme', function(req, res, next) 
{
  res.render('contactme', { title: 'Contact Me', someVariable: 'example' });
});

module.exports = router;