var fs = require("fs");

var hosts = require("./hosts.json");
var result = "";
hosts.all.forEach(function (env) {
    ["n1", "n2"].forEach(function (node) {
        env[node].forEach(function (host) {
            result = result + "\n" + host.host + "\t";
            host.alias.forEach(function (alias) {
                result = result + alias + "." + node + "." + env.name + " ";
            })
        });
    });
}
);
fs.writeFile("hosts", result);
