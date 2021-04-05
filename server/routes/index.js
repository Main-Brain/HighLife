import express from "express";
import auth from "./auth";

const router = express.Router();

router.use("/*", (req, res, next) => {
  res.setHeader("Expires", "-1");
  res.setHeader("Cache-Control", "must-revalidate, private");
  next();
});

router.use("/auth", auth);

export default router;
