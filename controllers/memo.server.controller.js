'use strict'

var Memo = require('../models/memo.server.model');

module.exports = {
  create: (req, res) => {
    // create variable to store each individual memo
    var individualMemo = {
      title : req.body.title,
      description : req.body.description
    }

    // ask mongoose to create it
    Memo.create(individualMemo)
      .then(memo => res.json(memo))
      .catch(err => res.json(err))
  },

  list : (req, res) => {
    Memo.find({})
      .then(result => res.json(result))
      .catch(err => res.json(err))
  },

  update : (req, res) => {
    // collect the req in variable
    var title = {
      title : req.params.title
    };
    var updateProp = {
      title : req.body.title,
      description : req.body.description
    }
    var option = {
      new : true,
      upsert : true
    }
    // ask mongoo to find and update the element like stated above
    Memo.findOneAndUpdate(title, updateProp, option)
      .then(memo => res.json(memo))
      .catch(err => res.json(err))
  },

  findTitle: (req, res) => {
    Memo.findOne({ title : req.params.title })
      .then((result) => res.json(result))
      .catch(err => res.json(err))
  },

  delete: (req, res) => {
    Memo.findOneAndRemove({ title : req.params.title})
      .then(memo => res.json(memo))
      .catch(err => res.json(err))
  }
}
