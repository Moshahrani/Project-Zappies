const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));


let port = 2000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

