// db.js
import mongoose from "mongoose";
import config from "../config/config.js";

async function connectDB() {
  try {
    await mongoose.connect( config.database_url , {
    });
    console.log('Database connection successful');
  } catch (err) {
    console.error('Database connection error:', err.message);
  }
}

export default connectDB;
