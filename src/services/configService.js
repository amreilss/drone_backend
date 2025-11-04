import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const CONFIG_URL = process.env.CONFIG_URL;
const DRONE_ID = process.env.DRONE_ID;
const DRONE_NAME = process.env.DRONE_NAME;
const COUNTRY = process.env.COUNTRY || "Thailand";

export async function getDroneConfig(droneId) {
  try {
    const res = await axios.get(CONFIG_URL);
    const drones = res.data.data;
    const found = drones.find(d => String(d.drone_id) === String(droneId));

    if (!found) {
      // fallback ใช้ข้อมูลของนักศึกษาเอง
      return {
        drone_id: DRONE_ID,
        drone_name: DRONE_NAME,
        light: "off",
        country: COUNTRY,
        weight: 25
      };
    }

    // ส่งกลับเฉพาะ field ที่โจทย์ต้องการ
    return {
      drone_id: found.drone_id,
      drone_name: found.drone_name,
      light: found.light,
      country: found.country,
      weight: found.weight
    };
  } catch (err) {
    console.error("Error fetching drone config:", err.message);
    // fallback เมื่อเกิดข้อผิดพลาด
    return {
      drone_id: DRONE_ID,
      drone_name: DRONE_NAME,
      light: "off",
      country: COUNTRY,
      weight: 25
    };
  }
}
