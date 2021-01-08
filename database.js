const mysql = require('mysql');

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'AirportDB',
    port: 3306
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Database connected succesfully !');
});

module.exports = conn;