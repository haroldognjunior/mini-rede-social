const fs = require('fs');
const path = require('path');
const db = require('../db.js');
const { Sequelize } = require('sequelize');
const basename = path.basename(__filename);
const models = {};

models.conn = db();

fs.readdirSync(__dirname)
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        const model = models.conn.import(path.join(__dirname, file));
        const name = file.split('.')[0];
        models[name] = model;
    });

const {
        User = require('./User.js'),
        Post = require('./Post.js'),
        Comment = require('./Comment.js')        
} = models

// Add model relationships here
db.Sequelize = Sequelize;

User.hasMany(Post);
User.hasMany(Comment);
Post.hasMany(Comment);

module.exports = models;