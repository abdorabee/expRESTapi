import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

// all routes in her are starting with / users

const users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstname} is added to the DB`);
});

export default router;
