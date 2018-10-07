var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override"),
    seedBD          = require("./seed"),
    Video           = require("./models/videos");
    port            = 4000;

 seedBD();
mongoose.connect("mongodb://localhost/linkTv", {useNewUrlParser: true});
// mongoose.connect("mongodb://jorge:jorge007@ds111963.mlab.com:11963/linktv", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

var contactoRoutes      = require("./routes/contactos"),
    cursosRoutes        = require("./routes/cursos"),
    serviciosRoutes     = require("./routes/servicios"),
    videosRoutes        = require("./routes/videos");

// app.use(videosRoutes);
app.use(serviciosRoutes);
// app.use(cursosRoutes);
// app.use(contactoRoutes);

app.get("/", function(req, res){
    Video.find({destacado:1}, function(err, allvideos){
        if(err){
            console.log(err);
        } else {
           res.render("landing", {videos: allvideos}); 
        }
    });  
});

app.listen(port, function(){
    console.log("Esta vivo!!!")
})

//process.env.PORT,process.env.IP