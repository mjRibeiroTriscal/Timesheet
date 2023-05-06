/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 06/05/2023 - 01:54:25
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 06/05/2023
    * - Author          : mario
    * - Modification    : 
**/

const express = require('express');
const cors = require('cors');
const jsforce = require('jsforce');

const app = express();
const port = 3333;

// const grant_type = 'password';
// const client_id = '3MVG95jctIhbyCppxhUUbM5T6kfhIYQayxUMLDkpiNLPzS2EdHw4DJnFUFqr5iA7.SlD8LC2SSbRA9dYaUHal';
// const client_secret = 'FF908EDEF3600B7D3E607B8BAFE9B20FF2C04B3BF72591A2E52AC4E98B88640C';
const username = 'mariojg@triscal.com.br';
const password = 'cOV3i586Db9WQPEM8WZz6rTMA0RKzWeMuLY8QxjZWD';

const conn = new jsforce.Connection({
    loginUrl: 'https://login.salesforce.com'
});

conn.login(username, password, function (err, res) {
    if (err) { return console.error(err); }
    console.log('Connected to Salesforce: ', res);
});

app.use(cors());

app.get('/accounts', function (req, res) {
    conn.query('SELECT Id, Name FROM Account', function (err, result) {
        if (err) {
            return console.error(err);
        }
        res.json(result.records);
    });
});

app.listen(port, function () {
    console.log('Server started on port ' + port);
});
