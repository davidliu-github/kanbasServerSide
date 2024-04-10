import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    startdate: Date,
    endDate: String,
    image: String,
    department: String,
    credits: Number,
    description: String,
  },
  { collection: "courses" });
export default coursesSchema;