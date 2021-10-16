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
router.post('/', [
    check('email', 'enter valid email').isEmail(),
    check('password', 'password is required').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

})



module.exports = router;