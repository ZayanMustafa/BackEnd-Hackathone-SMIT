import mongoose from "mongoose";

export async function dbconnect() {
  let isConnected = false;
  if (isConnected) return "already connected";
  try {

    let connected = await mongoose.connect(process.env.MONGODB_URI)
    if (connected.connection.readyState == 1) 
        console.log('Connected to database');
        isConnected = true;

    isConnected = true;
  } catch (error) {
    console.error('Error connecting to database', error);
  }
}  