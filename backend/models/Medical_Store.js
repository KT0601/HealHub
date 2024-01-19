import mongoose from "mongoose";

// Defining Schema
const Medical_store = new mongoose.Schema({
  Medicine_Name: { type: String, required: true, trim: true },
  count: { type: String, required: true, trim: true }
  
})

// Model
const UserModel = mongoose.model("user", Medical_store)

export default UserModel