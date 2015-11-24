var Hapi = require('hapi');
var Glue = require('glue');

var server = new Hapi.Server();
server.connection({ port: 3000 });

var manifest = {
  "connections": [
      {
          "port": 3000,
      }
  ],
  "plugins": {
      "good" : {
          opsInterval: 1000,
          reporters: [{
              reporter: require('good-console'),
              events: { log: '*', response: '*' }
          }]
      }
    }
  }

var options = {
    relativeTo: __dirname
};

var start = function(cb) {
  Glue.compose(manifest, options, function (err, server) {
      if (err) {
          throw err;
      }
      server.start(function () {
          cb(null, server)
      });
  });
};

module.exports = start;
