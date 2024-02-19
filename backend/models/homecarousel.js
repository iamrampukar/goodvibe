import mongoose from "mongoose";

const carouselSchema = new mongoose.Schema({
  videos: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});
export default mongoose.models?.Carousel ||
  mongoose.model("Carousel", carouselSchema);
