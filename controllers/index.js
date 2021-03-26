const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes.js');
const router = require('express').Router();

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;