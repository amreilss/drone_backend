import express from "express";
import { getStatus } from "../controllers/statusController.js";

const router = express.Router();
router.get("/:droneId", getStatus);

export default router;
