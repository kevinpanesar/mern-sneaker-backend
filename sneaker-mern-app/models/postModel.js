const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    colorway: { type: String, required: true },
    styleCode: { type: String, required: true },
    images: { type: [String], required: true },
    price: { type: String, required: true },
    cities: { type: {}, required: true },
    date: { type: String, required: true },
    mensFlag: { type: Boolean, required: true },
    womensFlag: { type: Boolean, required: true },
    kidsFlag: { type: Boolean, required: true },
    clothing: { type: Boolean, required: true },
    shoe: { type: Boolean, required: true },
  },
  { collection: "post" }
);

module.exports = Post = mongoose.model("post", postSchema);
