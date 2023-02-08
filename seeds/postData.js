const { Post } = require("../models");

const postdata = [
  {
    title: "Node.js for Devs",
    content:
      "Node.js is great for scaling your business needs because it can handle large amounts of traffic.",
    user_id: 1,
  },
  {
    title: "Help with Node.js",
    content:
      "Due to a large community of users, there are tutorials and guides available online to help the begginer to professional on their journey.",
    user_id: 2,
  },
  {
    title: "10 Most Popular Node Packages and Installation",
    content:
      "Express: npm i express, Async: npm i async, Lodash: npm i -g npm, Cloudinary: npm install cloudinary, Axios: npm install axios, Karma: npm i karma, Moleculer: npm i moleculer, Grunt: npm i grunt, PM2: npm install pm2, Mocha: npm i mocha.",
    
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;