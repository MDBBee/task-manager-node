const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 4000;
const connectDB = require("./db/connect.js");
const ideasRouter = require("./routes/tasks.js");
const notFound = require("./middleware/not-found.js");
const errorHandler = require("./middleware/errorHandler.js");

const app = express();

//BodyParser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome Onborad gentleladies and men!" });
});

//Router Middleware
app.use("/api/v1/tasks", ideasRouter);
app.use(notFound);
app.use(errorHandler);

const initApp = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on port: ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

initApp();
