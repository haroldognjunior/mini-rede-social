const S = require('sequelize');
const Post = (sequelize, S) => {
    // defino el modelo
    const P = sequelize.define('post', {
        id: {
            primaryKey: true,
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        message: {
            allowNull: false,
            type: S.STRING,
        }
    }, { timestamps: false });

    return P;
};

module.exports = Post;