const { User } = require('../models');

const userData = [
    {
        username: 'Brandon',
        password: 'password1234'
    },
    {
        username: 'Cara',
        password: 'password5678',
    },
    {
        username: 'Chai',
        password: 'password9101'
    },
];

const seedUser = () =>
User.bulkCreate(userData, {
    individualHooks: true,
});

module.exports = seedUser;