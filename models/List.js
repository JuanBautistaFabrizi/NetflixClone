const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    tittle: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array },
  },
  {  timestamps: { createdAt: 'created_at',updatedAt: 'updated_at' }  }
);

module.exports = mongoose.model("List", ListSchema);
