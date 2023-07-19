const express = require('express');
const router = express.Router();

router.route('/login').post((req,res) => {
    res.json({message: "login"});
})
router.route('/register').post((req,res) => {
    res.json({message: "register"});
})
router.route('/current').get((req,res) => {
    res.json({message: "current"});
})

module.exports = router;