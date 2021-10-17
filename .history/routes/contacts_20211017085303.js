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
        const savedContact = await contact.save()
        res.json(savedContact);
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send('Server Error');
    }
})


// @route   PUT api/contacts
// @desc    update a existing contact 
// @access  Private
router.put('/:id', [auth, [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'enter valid email').isEmail(),
]], async (req, res) => {

    const { name, email, phone, type } = req.body;
    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;
    try {
        let contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).send('No such contact exists');

        if (req.user.id !== contact.user.toString()) return res.status(401).send('Not Authorised');

        contact = await Contact.findByIdAndUpdate(req.params.id, { $set: contactFields }, { new: true });
        return res.json(contact);
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send('Server Error');
    }
})

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
        const savedContact = await contact.save()
        res.json(savedContact);
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send('Server Error');
    }
})


// @route   DELETE api/contacts
// @desc    delete a existing contact 
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).send('No such contact exists');

        if (req.user.id !== contact.user.toString()) return res.status(401).send('Not Authorised');

        await Contact.findByIdAndRemove(req.params.id);
        return res.send('contact removed');
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send('Server Error');
    }
})



module.exports = router;