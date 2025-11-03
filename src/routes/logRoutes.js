import express from "express";
import { getLogs, postLog } from "../controllers/logController.js";

const router = express.Router();

router.get("/:droneId", getLogs);
router.post("/", postLog);

export default router;
