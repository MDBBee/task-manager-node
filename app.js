const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 4000;
const connectDB = require("./db/connect.js");
const ideasRouter = require("./routes/tasks.js");

const app = express();

//Public-Folder/Static folder parser

//BodyParser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome Onborad gentleladies and men!" });
});

//Router Middleware
app.use("/api/v1/tasks", ideasRouter);

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
