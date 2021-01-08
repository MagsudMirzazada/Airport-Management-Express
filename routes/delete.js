const mysql = require('mysql');
const conn = require('../database');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('delete');
});

router.post('/', (req, res) => {
    if (req.body.deleteID){
        let sql = 'DELETE FROM FlightDB WHERE id='+req.body.deleteID+'';
        conn.query(sql, (err, result) => {
            if (err) throw err;
            res.render('homePage');
        });
    } else {
        res.render('400');
    }
});



module.exports = router;