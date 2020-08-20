const S = require('sequelize');
const Comment = (sequelize, S) => {
    // defino el modelo
    const C = sequelize.define('comment', {
        id: {
            primaryKey: true,
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        comment: {
            allowNull: false,
            type: S.STRING,
        }
    }, { timestamps: false });

    return C;
};

module.exports = Comment;