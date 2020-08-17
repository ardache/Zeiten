const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('landing');
});

router.get('/single-portfolio.hbs', (req, res, next) => {
  res.render('single-portfolio');
});

router.get('/single-portfolio2.hbs', (req, res, next) => {
  res.render('single-portfolio2');
});

router.get(`/.well-known/acme-challenge/PJVXP9Gg7ZDMlSxhzkLA4BPkWn1Fuq-G88qDbLpGdew`, (req, res, next) => {
  //res.render('single-portfolio2');
   //res.send(req.params.id+'.'+ WEBZEITEN_CERTBOT_ID);
  res.send(`PJVXP9Gg7ZDMlSxhzkLA4BPkWn1Fuq-G88qDbLpGdew.l0vgkAiyrdxRZrqgzQxVe_8fVtkWMXpluK5nmNyJxhA`);
});


// router.post('/php/sendMail.php', (req, res, next) => {
  
// });


module.exports = router;
