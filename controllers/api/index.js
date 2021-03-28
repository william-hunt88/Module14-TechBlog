const router = require('express').Router();
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

module.exports = router;