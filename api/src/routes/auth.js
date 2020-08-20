const server = require('express').Router();
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

server.post('/login')

server.get('/logout', function(req, res) {
    res.send('você fez logout');
});

server.post('/register');

server.get('/me');


module.exports = server;