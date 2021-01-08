const mysql = require('mysql');
const conn = require('../database');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('post');
});

router.post('/', (req, res) => {
    if (req.body.inputFROM && req.body.inputTO && req.body.inputDEP && req.body.inputARR && req.body.inputAIR && req.body.inputPAS){
        let sql = "INSERT INTO FlightDB (from_city, to_city, departure_time, arrival_time, airplane_info, passengers_count) VALUES (?)";
        let values = [req.body.inputFROM, req.body.inputTO, req.body.inputDEP, req.body.inputARR, req.body.inputAIR, req.body.inputPAS];
        conn.query(sql, [values], (err, result) => {
            if (err) throw err;
            res.render('homePage');
        });
    } else {
        res.render('400')
    }
});


module.exports = router;