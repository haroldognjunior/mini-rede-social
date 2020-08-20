const server = require('express').Router();
const { User } = require('../models');
const passport = require('passport');

//verificar que o usuário está logueado

function loggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.send({
        idUser: 0,
        nomeUser: "Convidado",
        senhaUser: "",
        emailUser: ""
    });
}

//criar um usuário

server.post('/', function(req, res) {
    User.create({
            nomeUser: req.body.nomeUser,
            senhaUser: req.body.senhaUser,
            emailUser: req.body.emailUser,
        })
        .then(() => {
            return res.send('Novo usuário criado')
        })
        .catch(() => {
            return res.status(400).send('Não foi possível criar o novo usuário')
        })
});

//trazer todos os usuários

server.get('/', loggedIn, function(req, res) {
    User.findAll()
        .then((users) => {
            res.send(users);
        });

});

//Traz a informacao de um usuário
server.get('/user/:nomeUser', function(req, res) {
    User.findOne({
            where: {
                nomeUser: req.params.nomeUser
            }
        })
        .then((user) => {
            res.send(user);
        });

});


//Fazer login do usuário

server.post('/login',
    passport.authenticate('local'),
    function(req, res) {

        res.json(req.user)

    }
);

//Fazer logout do usuário

server.post('/logout',
    passport.authenticate('local'),
    function(req, res) {
        req.logOut(req.user)
        res.send("usuario Deslogueado")

    }
);

//Trazer o login do usuário

server.get('/login', loggedIn,
    function(req, res) {
        res.json(req.user)

    }
);


module.exports = server;