const mysql = require('mysql');
const conn = require('../database');
const express = require('express');
const router = express.Router();

// validator
const {check, validationResult} = require('express-validator');


router.get('/', (req, res) => {
    res.render('post');
});

router.post('/', [
    check('inputPAS')
    .isInt().withMessage('Enter Integer')
    .isLength({min:1, max: 3}).withMessage('Not proper number')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

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