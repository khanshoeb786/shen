var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs= require('fs');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));
app.get('/button.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "button.htm" );
})

app.post('/download', urlencodedParser,function(req, res){

response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
response=JSON.stringify(response)
 console.log(response);
  var file = __dirname + "/"+'bc.txt';
fs.writeFile(file , response, function(err) {
    if(err) {
        return console.log(err);
    }
}); 
  var filename ="dooo.txt";

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})