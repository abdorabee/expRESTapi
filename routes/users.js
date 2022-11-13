import express from "express";

const router = express.Router();

router.get("/users", (req, res) => {
  res.send("it is working!!");
});

export default router;