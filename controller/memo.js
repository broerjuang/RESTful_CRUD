'use strict'

var models = require('../models')
var Memos = models.Memo

module.exports = {
  /* GET all memos */
  list : (req, res) => {
    Memos.findAll()
      .then((result) => res.render('index', { title : 'Memo', main : result}))
      .catch((err) => {
        res.json({
          error : err.message
        })
      })
  },

  /* Create New Memos */
  create : (req, res) => {
    Memos.create({
      title : req.body.title,
      main  : req.body.main
    }).then((result) => {
      res.json({
        status : 'data inserted',
        main   : result
      })
    }).catch((err) => {
      res.json({
        error : err.message
      })
    })
  },

  /* Update Memos */
  update : (req, res) => {
    Memos.update({
      title : req.body.title,
      main  : req.body.main
    }, {
      where : {
        id : req.params.id
      }
    }).then((result) => {
      res.json({
        status : "Data is updated",
        main   : result
      })
    }).catch((err) => {
      res.json ({
        error : err.message
      })
    })
  },

  /* find by id Memos */
  find : (req, res) => {
    Memos.findOne({
      where : {
        id : req.params.id
      }
    }).then((result) => {
      res.json({
        main : result
      })
    }).catch((err) => {
      res.json({
        error : err
      })
    })
  },

  /* delete by id Memos */
  delete: (req, res) => {
    Memos.destroy({
      where : {
        id : req.params.id
      }
    }).then((result) => {
      res.json({
        status : "Memo is deleted",
        main   : result
      })
    }).catch((err) => {
      res.json({
        error : err.message
      })
    })
  }
}
