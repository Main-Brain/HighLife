import express from "express";
import auth from "./auth";
import board from "./board";
import topic from "./topic";

const router = express.Router();

router.use("/*", (req, res, next) => {
  res.setHeader("Expires", "-1");
  res.setHeader("Cache-Control", "must-revalidate, private");
  next();
});

router.use("/auth", auth);
router.use("/board", board);
router.use("/topic", topic);

export default router;
