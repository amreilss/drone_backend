import { getDroneConfig } from "../services/configService.js";

export const getStatus = async (req, res) => {
  try {
    const { droneId } = req.params;
    const data = await getDroneConfig(droneId);

    const status = {
      drone_id: droneId,
      drone_name: data?.drone_name || "Unknown Drone",
      condition: data?.condition || "normal",
      light: data?.light || "off",
      updated_at: new Date().toISOString()
    };

    res.json(status);
  } catch (error) {
    console.error("❌ Error in getStatus:", error.message);
    res.status(500).json({ error: error.message });
  }
};
