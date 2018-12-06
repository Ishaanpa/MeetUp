var express = require ("express")
var app = express();
var bodyparser = require("body-parser");
app.set("view engine","ejs");

app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
	res.render("landing");
});

app.get("/hotspots", function(req, res){
	var spots = [
		{name: "Hicks", image: "https://farm6.staticflickr.com/5125/13548348064_ba400533ab.jpg"},
		{name: "WALC", image: "https://pixabay.com/get/e83db5072df2033ed1584d05fb1d4e97e07ee3d21cac104491f4c171afeeb3b8_340.jpg" },
		{name: "Lawson", image: "https://www.photosforclass.com/download/flickr-2480920040"}
	]
	res.render("hotspots", {spots:spots});
});

app.post("/hotspots",function(req, res){

});

app.listen(3000,function(){
	console.log("server is running");
})