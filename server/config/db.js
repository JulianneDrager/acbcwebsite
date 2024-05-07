const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/../api/.env" });

const MongoUriPath = process.env.DBSECERT;

const connectDB = async () => {
  const mongoURI = `mongodb+srv://${MongoUriPath}`;
  // const mongoURI = `mongodb+srv://Julianne:I7s0wyjdcog6pwma@acbc-database.xgrchue.mongodb.net/?retryWrites=true&w=majority&appName=acbc-database`;

  try {
    const connect = await mongoose.connect(mongoURI);
    console.log(`MnogoDB connected: ${connect.connection.host}...`);
    return connect; // Return the Mongoose connection  to make object available to other modules
  } catch (err) {
    console.error(`Error: ${err.message}`);
    console.error(err.stack);
    process.exit(1);
  }
};

module.exports = connectDB;
