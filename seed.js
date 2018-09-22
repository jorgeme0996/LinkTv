var mongoose        = require("mongoose"),
    Video           = require("./models/videos"),
    moment          = require("moment");

moment.locale("es");

var data = [
    {
       titulo: "Milagros Ancheita Atelier",
       fecha: moment().format('ll'),
       url: "https://www.youtube.com/embed/OBDn3XqKQTY"
    },
    {
        titulo: "Los experimentos más sorprendentes de Los cazadores de mitos | Sin interrupciones",
        fecha: moment().format('ll'),
        url: "https://www.youtube.com/embed/weSmlNXB6xw"  
    }

]

function seedDB(){
    Video.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Se elimino TODO!")
        }
    });

    for (let i in data){
        Video.create(data[i], function(err, video){
            if(err){
                console.log(err);
            } else {
                console.log("Acabas de subir un video")
            }
        })
    }
}

module.exports = seedDB;