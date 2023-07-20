import express, { json } from "express";
import jwt from "jsonwebtoken";
import key from "../MERN/keys/key.js";
import mongoose from "mongoose";

import { validationResult } from "express-validator";
import { registerValidation } from "./validations/auth.js";

mongoose
  .connect("mongodb+srv://admin:wwwwww@cluster0.3uatsci.mongodb.net/")
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());

app.post("/auth/register", registerValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  res.json({
    success: true,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
