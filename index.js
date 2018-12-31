var path = require('path')
var express = require('express')
var app = express()
app.use('/static', express.static('static'))
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))