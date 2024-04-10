import mongoose from "mongoose";
const modulesSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    course: { type: String, required: true, unique: true },
    lessons: [{name: { type: String, required: true, unique: true }, description: { type: String, }, module: { type: String, },}],
  },
  { collection: "modules" });
export default modulesSchema;