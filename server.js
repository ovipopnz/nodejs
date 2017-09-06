'use strict';

const express = require('express');
var $ = require('jquery');

var fs = require("fs");
var path = require("path");
var jsdom = require("jsdom");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    var name = req.query.name;
    res.send(`Hello ${name}\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

