import mongoose from "mongoose";

// Defining Schema
const Medical_History = new mongoose.Schema({
  user_id: { type: String, required: true, trim: true },
  visited_id: { type: String, required: false, trim: true },

})

// Model
const UserModel = mongoose.model("user", Medical_History)

export default UserModel