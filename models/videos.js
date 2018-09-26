var mongoose    = require("mongoose");

var videoSchema = new mongoose.Schema({
    titulo: String,
    categoria: String,
    fecha: String,
    url: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
})

var Video = mongoose.model("Video", videoSchema);

module.exports = Video;