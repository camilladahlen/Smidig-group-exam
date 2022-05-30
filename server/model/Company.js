import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  orgNr: { type: Number, required: true },
  description: String,
  categories: [
    {
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
      weight: { type: Number, required: true },
    },
  ],
  type: {
    type: String,
    enum: ["non-profit", "customer"],
    required: true,
    lowercase: true,
  },
  logo: { type: String },
  viewMoreInfo: { type: Object },
});

export const Company = mongoose.model("Company", companySchema);
