const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    tittle: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTittle: { type: String },
    imgSm: { type: String },
    Trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSerie: { type: Boolean, default: false },
  },
  {  timestamps: { createdAt: 'created_at',updatedAt: 'updated_at' }  }
);

module.exports = mongoose.model("Movie", MovieSchema);
