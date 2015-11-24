// Load modules
var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

// Test shortcuts

var expect = Code.expect;
var before = lab.before;
var after = lab.after;
var describe = lab.experiment;
var it = lab.test;

var startServer = require('./server');
describe('Main Server', function () {

    it('should start the server #1', function (done) {
        startServer(function (err, server) {
            expect(err).to.not.exist();
            server.stop({timeout: 3000}, done);
        });
    });


    it('should start the server #2', function (done) {
        startServer(function (err, server) {
            expect(err).to.not.exist();
            server.stop({timeout: 3000}, done);
        });
    });

    it('should start the server #3', function (done) {
        startServer(function (err, server) {
            expect(err).to.not.exist();
            server.stop({timeout: 3000}, done);
        });
    });

    it('should start the server #4', function (done) {
        startServer(function (err, server) {
            expect(err).to.not.exist();
            server.stop({timeout: 3000}, done);
        });
    });

    it('should start the server #5', function (done) {
        startServer(function (err, server) {
            expect(err).to.not.exist();
            server.stop({timeout: 3000}, done);
        });
    });

    it('should start the server #6', function (done) {
        startServer(function (err, server) {
            expect(err).to.not.exist();
            server.stop({timeout: 3000}, done);
        });
    });

    it('should start the server #7', function (done) {
        startServer(function (err, server) {
            expect(err).to.not.exist();
            server.stop({timeout: 3000}, done);
        });
    });

    it('should start the server #8', function (done) {
        startServer(function (err, server) {
            expect(err).to.not.exist();
            server.stop({timeout: 3000}, done);
        });
    });

    it('should start the server #9', function (done) {
        startServer(function (err, server) {
            expect(err).to.not.exist();
            server.stop({timeout: 3000}, done);
        });
    });

    it('should start the server #10', function (done) {
        startServer(function (err, server) {
            expect(err).to.not.exist();
            server.stop({timeout: 3000}, done);
        });
    });


});
