/*var express = require("express");
var app = express();            
app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/google/:search", function(req, res){
   var search = req.params.search;
   res.redirect('http://google.com/search?q=' + search);
});
app.get("/google", function(req, res){
    res.redirect('http://google.com');
 });
 app.get("/*", function(req, res){
    res.send("<h1>404</h1>");
 });
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});*/
var Square = require("./module");
var mySquareObject = new Square(5);

function main() {
   console.log(mySquareObject.getArea());
}
main();


