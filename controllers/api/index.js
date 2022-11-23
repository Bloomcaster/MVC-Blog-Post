const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/user' , user-routes);
router.use('/post', post-routes);
router.use('/comment' , comment-routes);

module.exports = router;