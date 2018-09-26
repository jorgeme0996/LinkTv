var express         = require("express"),
    router          = express.Router(),
    Servicio        = require("../models/servicios");

router.get("/servicios", function(req, res){
    Servicio.find({}, function(err, allSevicios){
        res.render("servicios/index", {servicios: allSevicios});
    });      
});

module.exports = router;