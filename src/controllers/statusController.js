import { getDroneConfig } from "../services/configService.js";

export async function getStatus(req, res) {
  try {
    const { droneId } = req.params;
    const config = await getDroneConfig(droneId);
    res.json({ condition: config.condition || "good" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
