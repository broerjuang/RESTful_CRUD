'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  return res.send('hello world');
})

app.listen(3000, ()=> {
  console.log('server is running on port 3000');
})
