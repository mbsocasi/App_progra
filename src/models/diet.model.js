import mongoose from "mongoose";

const dietSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    caloriasDiarias: {
      type: String,
      required: true,
    },
    ingestaCalorias: {
      type: String,
      required: true,
    },
    pesoCorporal: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Diet", dietSchema);
