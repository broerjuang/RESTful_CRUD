'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.memos');

// Get /

// Get /memo
router.get('/:id', controller.find);


module.exports = router;
