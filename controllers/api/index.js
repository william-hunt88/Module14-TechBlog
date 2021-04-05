const router = require('express').Router();
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes')

router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes)

module.exports = router;