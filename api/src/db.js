const Sequelize = require('sequelize');

function db() {
    return new Sequelize('postgres://postgres:123@localhost/techagro', {
        logging: false, // set to console.log to see the raw SQL queries
        //native: true, // lets Sequelize know we can use pg-native for ~30% more speed
    });
}

module.exports = db;