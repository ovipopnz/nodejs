var fs = require("fs");

var hosts = require("./hosts.json");
var result = "";
hosts.all.forEach(function (env) {
    ["n1", "n2"].forEach(function (node) {
        env[node].forEach(function (host) {
            var ip = host.split(' ')[0];
            var aliases = host.split(' ')[1];
            result = result + "\n" + ip + "\t";
            aliases.split(',').forEach(function (alias) {
                result = result + alias + "." + node + "." + env.name + " ";
            })
        });
    });
}
);
fs.writeFile("hosts", result);
