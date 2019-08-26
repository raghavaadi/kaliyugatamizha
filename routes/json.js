const express = require('express');
const router = express.Router();


var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/',function(req,res,next){
	res.render('json',{
		title :'Kaliyuga Tamizha',
		name : 'Raghav',
		post : '',
		result: ''
	});
});
router.post('/', urlencodedParser, function (req, res) {
	//console.log(req.body.post-text);
	resp=req.body.post;
	ren=JSON.parse(resp)
	 res.render('json', {
		title :'Kaliyuga Tamizha',
		name : 'Raghav',
		post: req.body.post,
		result: JSON.stringify(ren, undefined, 2)
	});
})
module.exports= router;