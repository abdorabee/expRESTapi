import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

// all routes in her are starting with / users

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstname} is added to the DB`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find(user => user.id === id);

  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.send(`User with the id ${id} is deleted from the database.`);

  users = users.filter(user => user.id !== id);
});

export default router;
