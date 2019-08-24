
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.json());
const index = require('./routes/index.js');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use('/',index);
app.use( express.static( "public" ) );
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.render('error.ejs');
})
const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
  if(err){
    console.log("didn not connect")
  }
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
module.exports = app;