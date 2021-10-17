const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');


// @route   GET api/contacts
// @desc    get contacts
// @access  Private
router.get('/', auth, async (req, res) => {
    const contacts = await Contact.find({ user: req.user.id }).sort({ data: -1 });
    res.json(contacts);
})

// @route   POST api/auth
// @desc    auth a user & get token
// @access  Public
router.post('/', (req, res) => {
    res.send('crete token');
})



module.exports = router;