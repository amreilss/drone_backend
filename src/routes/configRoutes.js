import express from "express";
import { getConfig } from "../controllers/configController.js";

const router = express.Router();

// ✅ Route ของ Drone Config
router.get("/:droneId", getConfig);

// ✅ ต้อง export router เป็น default เท่านั้น
export default router;
