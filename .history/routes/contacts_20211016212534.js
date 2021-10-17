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

// @route   POST api/contacts
// @desc    add a new contact 
// @access  Private
router.post('/', [auth, [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'enter valid email').isEmail(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;
    try {
        let contact = new Contact({
            user: req.user.id,
            name,
            email,
            phone,
            type
        })
        contact = await contact.save()
        res.json(contact);
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send('Server Error');
    }

})



module.exports = router;