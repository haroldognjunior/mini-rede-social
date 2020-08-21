const server = require('express').Router();
const { User, Post, Comment } = require('../models');
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

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

//Retorna a lista de posts

server.get('/', function(req, res) {
    Post.findAll()
        .then(function(message) {
            return res.status(200).send(message); 
        });
});

//Retorna um post específico, caso não exista deverá retornar 404 Not Found

server.get('/:id', function(req, res) {

    Post.findOne({
        where: {
            id: req.params.id,
        }
    }).then(function(message) {
            return res.status(200).send(message)
    })
    .catch(() => {
        return res.status(404).send('Não foi possível encontrar o post')
    })
})

//Faz a inclusão de um novo post

server.post('/:idUser', /* loggedIn, */ function(req, res) {

    var post = function(){
        return Post.create({
            message: req.body.message,
        })
    }

    var user = function() {
        return User.findOne({
            where: {
                idUser: req.params.idUser,
            }
        })
    }

    Promise.all([post(), user()]).then((response) => {
        if (response[0] && response[1]) {
            response[1].addPost(response[0]);
            return res.send('Post publicado com sucesso');
        } else {
            return res.send('Post não publicado')
        }
    })    
});

//Retorna a lista de comentários para um determinado post, caso não exista deverá retornar 404 Not Found

server.get('/:id/comments', function(req, res) {

    Comment.findOne({
        where: {
            id: req.params.id,
        }
    }).then(function(comment) {
        console.log(comment);
        return res.status(200).send(comment)
    })
    .catch(() => {
        return res.status(404).send('Não foi possível encontrar o comentário')
    })
})

//Faz a inclusão de um novo comentário para um determinado post

server.post('/:id/comments', /* loggedIn, */ function(req, res) {
    Comment.create({
            comment: req.body.comment,           
            userIdUser: req.body.userIdUser,
            postId : req.body.postId
        })
        .then(() => {
            return res.send('Seu comentário foi adicionado')
        })
        .catch(() => {
            return res.status(400).send('Não foi possível adicionar o seu comentário')
        })
});

module.exports = server;