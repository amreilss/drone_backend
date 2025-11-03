import { getDroneLogs, createDroneLog } from "../services/logService.js";

export const getLogs = async (req, res) => {
  try {
    const { droneId } = req.params;
    const logs = await getDroneLogs(droneId);
    const filtered = logs.map((x) => ({
      drone_id: x.drone_id,
      drone_name: x.drone_name,
      created: x.created,
      country: x.country,
      celsius: x.celsius,
    }));
    res.json(filtered.slice(0, 12));
  } catch (err) {
    console.error("❌ Error in getLogs:", err.message);
    res.status(500).json({ error: err.message });
  }
};

export const postLog = async (req, res) => {
  try {
    const result = await createDroneLog(req.body);
    res.json(result);
  } catch (err) {
    console.error("❌ Error in postLog:", err.message);
    res.status(500).json({ error: err.message });
  }
};
