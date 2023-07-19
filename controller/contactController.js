const asyncHandler = require('express-async-handler');
const Contact = require('../model/contactModel');
const { isValidObjectId } = require('mongoose');

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
	const contacts = await Contact.find();
	res.status(200).json(contacts);
});

// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
	const { name, email, phone } = req.body;
	if (!name || !email || !phone) {
		res.status(400);
		throw new Error('All fields are mandatory!');
	}
	const contact = await Contact.create({
		name,
		email,
		phone,
	});
	res.status(201).json(contact);
});

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
	const { id } = req.params;

	if (!isValidObjectId(id)) {
		res.status(400);
		throw new Error('Invalid ID format');
	}

	const contact = await Contact.findById(id);
	if (!contact) {
		res.status(404);
		throw new Error('Not Found');
	}
	res.status(200).json(contact);
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
	const { id } = req.params;

	if (!isValidObjectId(id)) {
		res.status(400);
		throw new Error('Invalid ID format');
	}

	const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
	if (!updatedContact) {
		res.status(404);
		throw new Error('Not Found');
	}

	res.status(200).json(updatedContact);
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
	const { id } = req.params;

	if (!isValidObjectId(id)) {
		res.status(400);
		throw new Error('Invalid ID format');
	}

	const deletedContact = await Contact.findByIdAndDelete(id);

	if (!deletedContact) {
		res.status(404);
		throw new Error('Contact not found');
	}

	res.status(200).json(deletedContact);
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };
