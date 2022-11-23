

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        
        },
        comment_content: {
            type: Datypes.STRING,
            allowNull: false,
            unique: true,

        },
        user_id: {
            type: DataTypes.INTEGER,
            refernces: {
                model: 'user',
                key: 'id',
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'post',
            key: 'id',
        },
    },
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
    }
);

model.exports = comment;