var express         = require("express"),
    router          = express.Router(),
    Servicio        = require("../models/servicios");

router.get("/servicios", function(req, res){
    res.render("servicios/index");
     
});

router.get("/servicios/info/:cat/:serv", function(req, res){
    let serv    = req.params.serv,
        cat     = req.params.cat;
    console.log(serv);
    console.log(cat);

    Servicio.find({categoria:cat, subcategoria:serv}, function(err, findServicios){
        res.render("servicios/info", {servicios: findServicios});
    });  
});

module.exports = router;