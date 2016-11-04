'use strict'

const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const controller = require('../controllers/controller.memos');

// Get /

// Get /memo
router.get('/:id', controller.find);


module.exports = router;
=======
const controller = require('../controller/memo')

//get by id
router.get('/', controller.list)
router.post('/', controller.create)
router.get('/:id', controller.find)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router
>>>>>>> 40fac10
