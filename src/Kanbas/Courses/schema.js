import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    number: String,
    startDate: Date,
    endDate: String,
    image: String,
    department: String,
    credits: Number,
    description: String,
  },
  { collection: "courses" });
export default coursesSchema;