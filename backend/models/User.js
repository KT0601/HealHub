import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: false, trim: true },
  password: { type: String, required: true, trim: true },
  gender: { type: String, required: true, trim: true },
  Aadhar_No: { type: String, required: true, trim: true },
  Address: { type: String, required: true, trim: true },
  Mobile_No: { type: String, required: true, trim: true },
  Age: { type: String, required: true, trim: true }
})

// Model
const UserModel = mongoose.model("user", userSchema)

export default UserModel