const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loginSystem',
});

app.post('/register', (req, res) => {
    const sql = "INSERT INTO login ('username','email','password') VALUES (?)";

})
app.listen (3001, () => {
    console.log('Server running on port 3001');
});
