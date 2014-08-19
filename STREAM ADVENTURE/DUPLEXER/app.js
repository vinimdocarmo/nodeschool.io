var spawn = require('child_process').spawn,
    duplexer = require('duplexer');

module.exports = function (cmd, args) {
    var ps = spawn(cmd, args);
    return duplexer(ps.stdin, ps.stdout);
};
