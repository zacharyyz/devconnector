const express = require('express');
const router = express.Router();

/**
 * @route GET api/profile
 * @description Test Route
 * @access Public
 */
router.get('/', (req, res) => {
  res.send('Profile OK');
});

module.exports = router;