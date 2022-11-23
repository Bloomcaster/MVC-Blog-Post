const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

//Comment belongs to POST and User
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

//Post belongs to user, Post has many comment
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

//User has many Post, Comment
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = {
    User,
    Comment,
    Post,
};