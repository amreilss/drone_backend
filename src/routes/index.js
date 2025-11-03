import express from "express";
import configRoutes from "./configRoutes.js";
import statusRoutes from "./statusRoutes.js";
import logRoutes from "./logRoutes.js";

const router = express.Router();

router.use("/configs", configRoutes);
router.use("/status", statusRoutes);
router.use("/logs", logRoutes);

export default router;
