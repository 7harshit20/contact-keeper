const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

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
    res.send(passed);
})

module.exports = router;