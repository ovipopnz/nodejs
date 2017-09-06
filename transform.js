var fs = require("fs");
var path = require("path");
var jsdom = require("jsdom/lib/old-api");

var jquerySource = fs.readFileSync("jquery-3.2.1.js", "utf-8");
var htmlSource = fs.readFileSync("dummy.html", "utf8");

eval(fs.readFileSync('tools.js')+'');

jsdom.env(
    htmlSource,
    ["http://code.jquery.com/jquery.js"],
    function (err, window) {
        var $ = window.$;
        doStuff($);
        fs.writeFile("dummy-end.html", jsdom.serializeDocument(window.document), function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    });
