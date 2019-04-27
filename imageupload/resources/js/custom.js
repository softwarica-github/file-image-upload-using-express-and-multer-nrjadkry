$(document).ready(function(){

$('#regisform').submit(function(e)
{
e.preventDefault();

var mydata = {

username : $('#username').val(),
address: $('#address').val(),
password: $('#password').val(),
userphoto : $('#userphoto')[0].files[0]

}

console.log(mydata['username'])

var formdata = new FormData();

for (key in mydata){
	console.log(key)
	console.log(mydata[key])

}
for (key in mydata){
	formdata.append(key,  mydata[key]);

}



$.ajax({
url : 'http://localhost:3000/admin/registration',
method: 'POST',
contentType: false,
processData: false,
dataType: 'json',
data : formdata,

success: function(result,status,jqXHR){
	console.log(result)
	console.log(status)

},
error: function (jqXHR,status){

console.log(status);

}


})

})

})







