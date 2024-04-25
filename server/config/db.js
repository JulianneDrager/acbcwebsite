const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/../api/.env" });

const MongoURIPath = process.env.DBSECERT;

const connectDB = async () => {
  const mongoURI = `${MongoURIPath}`;

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
git;
