const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const contactSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide your name'],
		},
		email: {
			type: String,
			required: [true, 'Please provide your email address'],
		},
		phone: {
			type: String,
			required: [true, 'Please provide your phone number'],
		},
	},
	{
		timestamps: true,
	}
);

const Contact = model('Contact', contactSchema);
module.exports = Contact;
