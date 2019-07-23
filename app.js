const express = require('express');
require('dotenv').config();
const crud = require('./services/crud.service');
const db = require('knex')({
  client:'pg',
  connection: process.env.DB_URL
});



const app = express();
app.use(require('morgan')('common'));
app.use('/',express.static('./public'));
app.get('/search',(req,res)=>{
  let search = req.query.search;
  crud.getItems(db,search).then(obj=>res.json(obj));

 
});

module.exports =app;