const express = require("express");
var app = express();
const PORT = 8005;
app.use(express.static('public'));
app.listen(process.env.PORT || PORT, function () {
  console.log("Listening on port: ",PORT);
});


