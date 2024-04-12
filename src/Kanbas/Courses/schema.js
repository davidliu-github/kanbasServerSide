import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema({
    name: String,
    id: String,
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