'use stict'

const data = require('../data/data')

module.exports = {
  list: (req, res) => {
    res.send(data)
  },

  find : (req, res) => {
    res.send(data.filter(x => x == req.params.id, x))
  }
}
