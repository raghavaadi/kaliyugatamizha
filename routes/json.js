const express = require('express');
const router = express.Router();


var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/',function(req,res,next){
	res.render('json',{
		title :'Kaliyuga Tamizha',
		name : 'Raghav',
		result: ''
	});
});
router.post('/', urlencodedParser, function (req, res) {
	//console.log(req.body.post-text);
	res=req.body.post-text;
	console.log(JSON.stringify(res));
	// res=req.body.post-text;
	//  res.render('json', {
	// 	title :'Kaliyuga Tamizha',
	// 	name : 'Raghav',
	// 	result: ''
	// });
})
module.exports= router;