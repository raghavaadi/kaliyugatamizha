const express = require('express');
const router = express.Router();
const db=require('../dbhelper/dbstuff.js');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });







router.get('/',function(req,res,next){
	res.render('login',{
		title :'express',
		name : 'Raghav'
	});
});
router.post('/', urlencodedParser, function (req, res) {
	console.log(req.body);
	retrieve_user(req.body.user,req.body.password,res);
//  res.send('welcome, ' + req.body.user);
})
module.exports= router;