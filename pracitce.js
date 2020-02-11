const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    title: { type: String },
    releaseDate: { type: Data },
    songs: [ { type: mongoose.Schema.Types.ObjectId, ref: "Song" } ]
})
Game = mongoose.model("Game", gameSchema);
