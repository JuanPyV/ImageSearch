const express = require("express");
var bodyParser = require('body-parser')
const app = express();
//const { exec } = require("child_process");
const { searchImage } = require("./search")

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', urlencodedParser, (req, res) => {
  let expr;
  console.log('Got body:', req.body);
  if (req.body.imageOpt){
    if (req.body.imageOpt == "id"){
      expr = req.body.imageOpt + ":" + req.body.search_term
    }else if (req.body.imageOpt == "tag"){
      console.log("TAGGGGGGGG")
    }
  }
  
  console.log(expr);
  searchImage(expr);
  res.sendFile(__dirname + "/index.html");
});
