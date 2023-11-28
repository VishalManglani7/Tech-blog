const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

Post.belongsTo(User, {
  foreignKey: 'userId',
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = {
  User,
  Comment,
  Post
};