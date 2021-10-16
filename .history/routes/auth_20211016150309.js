const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// @route   GET api/auth
// @desc    login a user
// @access  Private
router.get('/', (req, res) => {
    res.send('login a user');
})

// @route   POST api/auth
// @desc    auth a user & get token
// @access  Public
router.post('/', (req, res) => {
    res.send('crete token');
})



module.exports = router;