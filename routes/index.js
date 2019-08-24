const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next){
	res.render('index',{
		title :'kaliyuga Tamizha',
		name : 'Raghav'
	});
});
module.exports= router;