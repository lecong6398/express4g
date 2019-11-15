const express = require('express');
const router = express.Router();
const controllers = require("../../controllers/shops/index")

// Home page route.
router.get('/home', controllers.getIndex)

router.get('/home/:id', controllers.getGoiCuoc)

module.exports = router;