var mongoose        = require("mongoose"),
    Video           = require("./models/videos"),
    Servicio        = require("./models/servicios"),
    moment          = require("moment");

moment.locale("es");

// var data = [
//     {
//        titulo: "Milagros Ancheita Atelier",
//        fecha: moment().format('ll'),
//        url: "https://www.youtube.com/embed/OBDn3XqKQTY"
//     },
//     {
//         titulo: "Los experimentos más sorprendentes de Los cazadores de mitos | Sin interrupciones",
//         fecha: moment().format('ll'),
//         url: "https://www.youtube.com/embed/weSmlNXB6xw"  
//     }

// ]

var data = [
    {
        categoria: "Asesoría legal",
        subcategoria: {
            titulo: "mercantil"
        },
        descripcion: "AQUI IRA UNA DESCRIPCIÓN DEL SERVICIO BRINDADO. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 100.50
    },
    {
        categoria: "Asesoría legal",
        subcategoria: {
            titulo: "Penal"
        },
        descripcion: "AQUI IRA UNA DESCRIPCIÓN DEL SERVICIO BRINDADO. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 100.50
    },
    {
        categoria: "Mercadotecnia",
        subcategoria: {
            titulo: "Marketing digital"
        },
        descripcion: "AQUI IRA UNA DESCRIPCIÓN DEL SERVICIO BRINDADO. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 100.50
    },
    {
        categoria: "Mercadotecnia",
        subcategoria: {
            titulo: "Diseño gráfico"
        },
        descripcion: "AQUI IRA UNA DESCRIPCIÓN DEL SERVICIO BRINDADO. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 100.50
    },
    {
        categoria: "Mercadotecnia",
        subcategoria: {
            titulo: "Diseño web"
        },
        descripcion: "AQUI IRA UNA DESCRIPCIÓN DEL SERVICIO BRINDADO. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 100.50
    },
    {
        categoria: "Mercadotecnia",
        subcategoria: {
            titulo: "Estudió de mercado"
        },
        descripcion: "AQUI IRA UNA DESCRIPCIÓN DEL SERVICIO BRINDADO. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 100.50
    }
]

// function seedDB(){
//     Video.remove({}, function(err){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Se elimino TODO!")
//         }
//     });

//     for (let i in data){
//         Video.create(data[i], function(err, video){
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log("Acabas de subir un video")
//             }
//         })
//     }
// }

function seedDB(){
    Servicio.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Se elimino TODO!")
        }
    });

    for (let i in data){
        Servicio.create(data[i], function(err, servicio){
            if(err){
                console.log(err);
            } else {
                console.log(servicio);
                console.log("Acabas de subir un servicio")
            }
        })
    }
}

module.exports = seedDB;