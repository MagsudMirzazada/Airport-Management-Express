const mysql = require('mysql');
const conn = require('../database');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('homePage');
});



module.exports = router;