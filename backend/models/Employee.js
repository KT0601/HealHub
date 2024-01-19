import mongoose from "mongoose";

// Defining Schema
const Employee = new mongoose.Schema({
  employee_name: { type: String, required: true, trim: true },
  designation: { type: String, required: false, trim: true },
  qualification: { type: String, required: true, trim: true },
  gender: { type: String, required: true, trim: true },
  Aadhar_No: { type: String, required: true, trim: true },
  Address: { type: String, required: true, trim: true },
  Mobile_No: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  Age: { type: String, required: true, trim: true }
})

// Model
const UserModel = mongoose.model("user", Employee)

export default UserModel