const express = require("express");
const dotenv = require("dotenv");

dotenv.config({path: "./config.env"});

const app = express();

// Profile Routes
app.use("/api/test", (req, res) => {
  res.send("hello!");
});
app.use("/api/v1/profile", require("./routes/profile"));

// Handle Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`${process.env.NODE_ENV} server running on port ${port}`);
});
