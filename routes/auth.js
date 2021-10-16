const express = require('express');
const router = express.Router();

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