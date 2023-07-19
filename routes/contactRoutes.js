const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
	res.status(200).json({ msg: 'Get all contacts' });
});

router.route('/').post((req, res) => {
	res.status(200).json({ msg: 'Create Contact' });
});

router.route('/:id').get((req, res) => {
	res.status(200).json({ msg: `Get Contact of ${req.params.id}` });
});

router.route('/:id').put((req, res) => {
	res.status(200).json({ msg: `Update Contact of ${req.params.id}` });
});

router.route('/:id').delete((req, res) => {
	res.status(200).json({ msg: `Delete Contact of ${req.params.id}` });
});

module.exports = router;
