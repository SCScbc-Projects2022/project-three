const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// serve up react front-end in production
// User this when working on development project
// router.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/index.html'));
// });

// Use this when deploying
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
