var express = require('express');
var app = express();



app.use(express.static(__dirname ));
console.log('Port is running on 3000');
app.listen(3000);