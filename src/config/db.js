const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async()=> {
    try {
      mongoose.set('strictQuery', false);
      const conn = await mongoose.connect(process.env.MONGODB_URL);
      console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
    }
}
  
module.exports = connectDB;