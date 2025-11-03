import axios from "axios";

/**
 * ดึงรายการ log ของ drone
 */
export const getDroneLogs = async (droneId) => {
  try {
    const url = `${process.env.LOG_URL}?filter=(drone_id=${droneId})&sort=-created`;
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.LOG_API_TOKEN}`,
      },
    });
    return res.data.items || [];
  } catch (error) {
    console.error("❌ Error fetching Drone Logs:", error.message);
    throw error;
  }
};

/**
 * สร้าง log ใหม่
 */
export const createDroneLog = async (data) => {
  try {
    const res = await axios.post(process.env.LOG_URL, data, {
      headers: {
        Authorization: `Bearer ${process.env.LOG_API_TOKEN}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("❌ Error creating Drone Log:", error.message);
    throw error;
  }
};
