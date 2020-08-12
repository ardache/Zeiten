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

// router.post('/php/sendMail.php', (req, res, next) => {
  
// });


module.exports = router;
