const express = require('express');
const router = express.Router();


var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });







router.get('/',function(req,res,next){
	res.render('json',{
		title :'Kaliyuga Tamizha',
		name : 'Raghav'
	});
});
router.post('/', urlencodedParser, function (req, res) {
	console.log(req.body);
	
//  res.send('welcome, ' + req.body.user);
})
module.exports= router;