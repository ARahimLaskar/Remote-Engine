const { connectDatabase } = require("./config/db");
const userRoutes = require("./Routes/userRouters");

const express = require("express");
const cors = require("cors");
const { authentication } = require("./Middleware/authentication");
const addUserDataRoutes = require("./Routes/addUserDataRoutes");
const getUserDataRoutes = require("./Routes/getUserDataRoutes");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/user", userRoutes);
// app.use(authentication);
app.use("/data", addUserDataRoutes);
app.use("/data-get", getUserDataRoutes);

const port = 8080;
connectDatabase().then(() => {
  app.listen(port, (err) => {
    if (err) {
      console.log("server Error", err);
    }
    console.log(`server listening on http://localhost:${port}`);
  });
});
