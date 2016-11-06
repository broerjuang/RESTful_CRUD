'use strict'

var express = require('express');
var router = express.Router();
var memoCtrl = require('../controllers/memo.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET the list */
router.get('/memo', memoCtrl.list)

/* Post New Memo */
router.post('/memo', memoCtrl.create)

/* Update Memo by its title */
router.put('/memo/:title', memoCtrl.update)

/*  Get memo by its title */
router.get('/memo/:title', memoCtrl.findTitle)

/* Delete memo by its title */
router.delete('/memo/:title', memoCtrl.delete)



module.exports = router;
