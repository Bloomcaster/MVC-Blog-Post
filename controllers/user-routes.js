const router = require('express').Router();
const { runInNewContext } = require('vm');
const { User } = require('../../models');

//route for signup
router.post('/', async (req,res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save( () =>{
            req.session.user_id = newUser.id;
            req.session.username = newUser.username;
            req.session.logged_in = true;

            res.status(200).json(newUser);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//route for login
router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!user) {
            res.status(400).json({ message: 'No user to be found!' });
            return;
        }
        const validPassword = user.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'No user to be found!' });
            return;
        }
        req.session.save( () => {
            req.session.user_id = user.id;
            req.session.username = user.username;
            req.session.logged_in = true;

            res.json({ user, message: 'You are logged in, welcome!' });
        });
    } catch (err) {
        res.status(400).json({ message: 'User not found' });
    }
});

//route for logging out
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy( () => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
