var express = require('express');
var app = express();
var port= process.env.PORT || 3500;
app.set('port',port);
app.get("/",function(req,res){
    var lang = req.headers["accept-language"];
    var opsys = req.headers["user-agent"].match(/\(.+?\)/)[0];
    lang = lang.substring(0,lang.indexOf(','));
     res.json({
        ipaddress: req.connection.remoteAddres || req.headers['x-forwarded-for'],
        language: lang,
        os: opsys
    });
});
app.listen(port,function(){
    console.log('listening on port ' + port);
});
