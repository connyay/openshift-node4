'use strict';
let http = require('http');
let env = process.env;
let port = env.OPENSHIFT_NODE4_PORT || 1337;
let ip = env.OPENSHIFT_NODE4_IP || '127.0.0.1';

http.createServer(function(req, res) {
    let body = `Welcome to node.js v4 on OpenShift!
  Everything seems to be in order.
  Running node.js`;
    for (let v in process.versions) {
      body += `\n- ${v}: ${process.versions[v]}`;
    }

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(body);
}).listen(port, ip);
