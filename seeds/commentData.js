const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "Awesome!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_content: "Keep  it coming!",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_content: "Let's work on this!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_content: "Good job!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_content: "This is exciting!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_content: "Wonderful work.",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_content: "Nice!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_content: "Keep the ideas coming!.",
    user_id: 1,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;