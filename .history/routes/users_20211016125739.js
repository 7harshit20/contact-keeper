const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// @route   POST api/users
// @desc    Resgister a user
// @access  Public
router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('password', 'password should have more than 6 characters').not().isEmpty().isLength({ min: 6 }),
    check('email', 'enter valid email').not().isEmpty().isEmail()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    const user = User.findOne({ email });
    if (user) {
        res.status(400).json({ msg: 'Email already registered' });
    }
    user = new User({ name, email, password });


    res.send('user saved');
})



module.exports = router;