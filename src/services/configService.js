import axios from "axios";

export const getDroneConfig = async (droneId) => {
  try {
    const url = `${process.env.CONFIG_URL}?id=${droneId}`;
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error("Error fetching drone config:", err.message);
    throw err;
  }
};
