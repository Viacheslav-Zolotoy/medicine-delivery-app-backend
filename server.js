const mongoose = require("mongoose");
const app = require("./app");
const { DB_HOST, DB_NAME } = process.env;

mongoose
  .connect(DB_HOST, {
    dbName: DB_NAME,
  })
  .then(() => {
    console.log("Database connection successful");
    console.log("Using database:", DB_NAME);
    app.listen(3003, () => {
      console.log("Server running. Use our API on port: 3003");
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
