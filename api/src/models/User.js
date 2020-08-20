const S = require('sequelize');
const User = (sequelize, S) => {
    // defino el modelo

    const U = sequelize.define('user', {
        idUser: {
            primaryKey: true,
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        nomeUser: {
            allowNull: false,
            type: S.STRING,
            unique: true,
        },
        senhaUser: {
            allowNull: false,
            type: S.STRING,
            unique: false,
        },
        emailUser: {
            allowNull: false,
            type: S.STRING,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        }
    }, { timestamps: false });

    return U;
};

module.exports = User;