import mongoose from "mongoose";

// Defining Schema
const Purchasing_Medicine = new mongoose.Schema({
  user_id: { type: String, required: true, trim: true },
  visit_id: { type: String, required: true, trim: true },
  Ordered_prescription: { type: String, required: false, trim: true },
  

})

// Model
const UserModel = mongoose.model("user", Purchasing_Medicine)

export default UserModel