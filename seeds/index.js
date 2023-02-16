const sequelize = require("../config/connection");

const seedUser = require("./userData");
const seedPost = require("./postData");
const seedComments = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- Now we're cooking with gas!-----\n");

  await seedUser();
  console.log("\n----- User, seeds have been planted -----\n");

  await seedPost();
  console.log("\n----- Post, seeds have been planted -----\n");

  await seedComments();
  console.log("\n----- Comments added, bring on the good vibes! -----\n");

  process.exit(0);
};

seedAll();