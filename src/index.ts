import { MongoClient } from "mongodb";

const express = require("express");
const body = require("body-parser");
const cors = require("cors");

async function start() {
  try {
    const app = express();

    app.use(
      cors({
        origin: "*",
        credentials: true,
      })
    );

    // MongoDB connection
    const mongo = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/crm_api"
    );

    await mongo.connect();

    // Store the db connection
    app.db = mongo.db();

    // Limit json body because we only use text based input
    app.use(
      body.json({
        limit: "500kb",
      })
    );

    // Add routes
    app.use("/score", require("./routes/score"));

    // Start server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
}

start();
