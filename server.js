import express from "express";
import cors from "cors";
import routes from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());
app.use("/", routes); // ✅ สำคัญมาก

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
