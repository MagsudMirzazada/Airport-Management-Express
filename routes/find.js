const mysql = require('mysql');
const conn = require('../database');
const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    if (req.body.from_city && req.body.to_city) {
        let sql = 'SELECT * FROM FlightDB WHERE from_city=? AND to_city=?';
        conn.query(sql, [req.body.from_city, req.body.to_city], (err, result) => {
            if (err) throw err;
            res.render('find', {obj: {print:result}});
        });
    }
    else if (req.body.from_city && !req.body.to_city) {
        let sql = 'SELECT * FROM FlightDB WHERE from_city=?';
        conn.query(sql, [req.body.from_city], (err, result) => {
            if (err) throw err;
            res.render('find', {obj: {print:result}});
        });
    }
    else if (!req.body.from_city && req.body.to_city) {
        let sql = 'SELECT * FROM FlightDB WHERE to_city=?';
        conn.query(sql, [req.body.to_city], (err, result) => {
            if (err) throw err;
            res.render('find', {obj: {print:result}});
        });
    }
    else if (!req.body.from_city && !req.body.to_city) {
        let sql = 'SELECT * FROM FlightDB';
        conn.query(sql, (err, result) => {
            if (err) throw err;
            res.render('find', {obj: {print:result}});
        });
    }
});

module.exports = router;