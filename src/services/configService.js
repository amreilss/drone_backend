import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const CONFIG_URL = process.env.CONFIG_URL;

export const getDroneConfig = async (droneId) => {
  try {
    const response = await axios.get(CONFIG_URL);
    const drones = response.data.data;
    const drone = drones.find((d) => d.drone_id === Number(droneId));

    if (!drone) {
      throw new Error("Drone not found");
    }

    return drone;
  } catch (error) {
    console.error("Error fetching drone config:", error.message);
    throw error;
  }
};
