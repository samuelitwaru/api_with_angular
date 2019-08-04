// server.js
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

const route = require('./routes/index');

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use('/api', route);

const port = process.env.PORT || '3000';

const server = http.createServer(app);

app.listen(port, function(){
	console.log(`API running on ${port}`)
});