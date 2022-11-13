import express from "express";
import bodyPraser from "body-parser";
import  usersRoutes  from "./routes/users.js";


const app = express();
const PORT = 5000;

app.use(bodyPraser.json());

app.get("/", (req, res) => {
  res.send("Hello form homepage");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
