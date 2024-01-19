import mongoose from "mongoose";

// Defining Schema
const Visit = new mongoose.Schema({
  user_id: { type: String, required: true, trim: true },
  date_time: { type: String, required: false, trim: true },
  doctor_id: { type: String, required: false, trim: true },
  prescription: { type: String, required: false, trim: true },
//   Address: { type: String, required: true, trim: true },
//   Mobile_No: { type: String, required: true, trim: true },
//   Age: { type: String, required: true, trim: true }
})

// Model
const UserModel = mongoose.model("user", Visit)

export default UserModel