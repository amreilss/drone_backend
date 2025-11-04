import { getDroneConfig } from "../services/configService.js";

export const getStatus = async (req, res) => {
  try {
    const { droneId } = req.params;
    const config = await getDroneConfig(droneId);
    res.json({ condition: config.condition || "unknown" });
  } catch (error) {
    console.error("Error in getStatus:", error.message);
    res.status(500).json({ error: "Failed to fetch drone status" });
  }
};
