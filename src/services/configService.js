import axios from "axios";

export const getDroneConfig = async (droneId) => {
  try {
    const url = `${process.env.CONFIG_URL}?drone_id=${droneId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching drone config:", error.message);
    throw error;
  }
};
