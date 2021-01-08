const mysql = require('mysql');
const conn = require('../database');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('update')
});

router.post('/', (req, res) => {
    if (!req.body.updateID && !req.body.updateFROM && !req.body.updateTO && !req.body.updateDEP && !req.body.updateARR && !req.body.updateAIR && !req.body.updatePAS){
        res.render('400');
        return
    }
    else if (!req.body.updateID) {
        res.render('400');
        return
    }
    else{
        let sql = "UPDATE FlightDB SET";

        if (req.body.updateFROM) {
            sql += " from_city='"+req.body.updateFROM+"'";
        }
        if (req.body.updateTO) {
            if (req.body.updateFROM){
                sql += ','
            }
            sql += " to_city='"+req.body.updateTO+"'";
        }
        if (req.body.updateDEP) {
            if (req.body.updateFROM || req.body.updateTO){
                sql += ','
            }
            sql += " departure_time='"+req.body.updateDEP+"'";
        }
        if (req.body.updateARR) {
            if (req.body.updateFROM || req.body.updateTO || req.body.updateDEP){
                sql += ','
            }
            sql += " arrival_time='"+req.body.updateARR+"'";
        }
        if (req.body.updateAIR) {
            if (req.body.updateFROM || req.body.updateTO || req.body.updateDEP || req.body.updateARR){
                sql += ','
            }
            sql += " airplane_info='"+req.body.updateAIR+"'";
        }
        if (req.body.updatePAS) {
            if (req.body.updateFROM || req.body.updateTO || req.body.updateDEP || req.body.updateARR || req.body.updateAIR){
                sql += ','
            }
            sql += " passengers_count=" + req.body.updatePAS;
        }
        sql += " WHERE id=" + req.body.updateID;

        conn.query(sql, (err, result) => {
            if (err) throw err;
            res.render('homePage');
        });
    }
});

module.exports = router;