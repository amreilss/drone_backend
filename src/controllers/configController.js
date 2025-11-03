import { getDroneConfig } from "../services/configService.js";

export const getConfig = async (req, res) => {
  try {
    const { droneId } = req.params;
    const data = await getDroneConfig(droneId);
    res.json(data);
  } catch (error) {
    console.error("❌ Error in getConfig:", error.message);
    res.status(500).json({ error: error.message });
  }
};
