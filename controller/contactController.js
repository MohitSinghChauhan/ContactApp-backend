const asyncHandler = require('express-async-handler')

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler (async (req, res) => {
	res.status(200).json({ msg: 'Get all contacts' });
});

// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler (async (req, res) => {
	const {name, email, contact } = req.body;
	if(!name || !email || !contact){
		res.status(400);
		throw new Error("All fields are mandatory!")
	}
	res.status(201).json({ msg: 'Create Contact' });
});

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler (async (req, res) => {
	res.status(200).json({ msg: `Get Contact of ${req.params.id}` });
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler (async (req, res) => {
	res.status(200).json({ msg: `Update Contact of ${req.params.id}` });
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler (async (req, res) => {
	res.status(200).json({ msg: `Delete Contact of ${req.params.id}` });
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };
