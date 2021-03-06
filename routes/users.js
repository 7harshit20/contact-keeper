const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// @route   POST api/users
// @desc    Resgister a user
// @access  Public
router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('password', 'password should have more than 6 characters').isLength({ min: 6 }),
    check('email', 'enter valid email').isEmail()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'Email already registered' });
        }
        user = new User({ name, email, password });
        user.password = await bcrypt.hash(password, await bcrypt.genSalt(10));
        await user.save();
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send('Server error');
    }
})



module.exports = router;