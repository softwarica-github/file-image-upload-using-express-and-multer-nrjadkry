var express = require('express');
var myapp = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');





myapp.use(bodyParser.urlencoded({extended:true}))
myapp.use(bodyParser.json());
myapp.use(express.static(
	path.join(__dirname, 'resources')
	));
myapp.set('views', __dirname+'/views');
myapp.set('view engine', 'ejs');


var mystorage = multer.diskStorage({

destination : function(req,file,cb){
	cb(null,'resources/uploads')
},

filename : function(req,file,cb){

	cb(null,'sdfsdfsdf')
}

})
var upload = multer({ storage: mystorage })



myapp.get('/admin/registration', function(req,res){
	res.render('backend/registration');
})



myapp.post('/admin/registration',upload.single('userphoto'),function(req,res,next){
console.log('test');
console.log(req.file);

})



myapp.listen(process.env.PORT);
