import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    prodcuts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Prodcut",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const wishlist = mongoose.model("Wishlist", wishlistSchema);
