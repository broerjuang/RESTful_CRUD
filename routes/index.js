'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/memo')

//get by id
router.get('/', controller.list)
router.post('/', controller.create)
router.get('/:id', controller.find)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router
