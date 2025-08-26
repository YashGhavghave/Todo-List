import mongoose from "mongoose";

let task = new mongoose.Schema({
  Task: {
    type: String,
    require: true,
  },
  Time: {
    type: String,
    require: true,
  },
  Date: {
    type: String,
    require: true,
  },
});

export const Model = mongoose.model("Task", task)
