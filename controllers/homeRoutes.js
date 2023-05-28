const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('homepage');
  });

router.get('/dashboard', async (req, res) => {
  res.render('dashboard');
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/signUp', async (req, res) => {
  res.render('signUp');
});

module.exports = router;