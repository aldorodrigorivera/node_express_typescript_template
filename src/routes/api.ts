import express from "express";
import * as apiController from "../controller/api";
import { isAuth } from "../middleware/auth";

export const api = express.Router();

api.get("/:id",isAuth , apiController.me);

