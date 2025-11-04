# Drone Backend Server
ระบบ Drone Backend Server พัฒนาโดยใช้ Node.js และ Express.js
เพื่อให้บริการข้อมูล การตั้งค่า (Config), สถานะ (Status) และ บันทึกการทำงาน (Logs) ของ Drone ผ่่าน RESTful API ที่เชื่อมต่อกับ External API จริง และ Deploy บน Render Cloud

---------------------------------------

# เทคโนโลยีที่ใช้
- Node.js v22+
- Express.js
- Axios ใช้เรียก API ภายนอก (Google Script & PocketHost)
- CORS
- dotenv (สำหรับจัดการ environment variables)
- Render Cloud ใช้ deploy server ให้เข้าถึงได้จากภายนอก

---------------------------------------

# โครงสร้างโปรเจกต์
drone_backend/
│
├── .env
├── package.json
├── server.js
│
└── src/
├── routes/
│ ├── configRoutes.js
│ ├── statusRoutes.js
│ ├── logRoutes.js
│ └── index.js
│
├── controllers/
│ ├── configController.js
│ ├── statusController.js
│ └── logController.js
│
└── services/
├── configService.js
├── logService.js
└── apiClient.js

---------------------------------------

# วิธีติดตั้งและใช้งาน
1. Clone โปรเจกต์
    git clone https://github.com/amreilss/drone_backend.git
    cd drone_backend


2. ติดตั้ง dependencies
    npm install

3. สร้างไฟล์ .env
    PORT=8080
    
    CONFIG_URL=https://script.google.com/macros/s/AKfycbzwclqJRodyVjzYyY-NTQDb9cWG6Hoc5vGAABVtr5-jPA_ET_2IasrAJK4aeo5XoONiaA/exec
    
    LOG_URL=https://app-tracking.pockethost.io/api/collections/drone_logs/records
    
    LOG_API_TOKEN=20250901efx

4. รันเซิร์ฟเวอร์
    npm start

    เมื่อรันสำเร็จจะเห็นข้อความ
    🚀 Server running on port 10000

---------------------------------------

# การทดสอบ API
    Endpoint: /configs/:droneId
    Method: GET
    Description: ดึงข้อมูลการตั้งค่า Drone
    Example Result:    
        {      
            "drone_id": 3001, 
            "drone_name": "Dot Dot So", 
            "condition": "on-service" 
        }

    Endpoint: /status/:droneId
    Method: GET
    Description: ดึงสถานะการทำงานของ Drone
    Example Result:
        { 
            "condition": "on-service" 
        }

    Endpoint: /logs/:droneId
    Method: GET
    Description: ดึงบันทึกการทำงานของ Drone
    Example Result:
        [ { 
            "drone_id": 3001, 
            "created": "2025-11-04T12:00:00Z", 
            "celsius": 36.5 
        } ]
    
    Endpoint: /logs
    Method: POST
    Description: เพิ่ม Log ใหม่
    Example Result:
        { 
            "success": true 
        }

---------------------------------------

# ตัวอย่างผลลัพธ์จริง (จาก Render)
- GET /status/3001
    {
        "condition": "on-service"
    }

- GET /configs/3001
    {
        "drone_id": 3001,
        "drone_name": "Dot Dot So",
        "condition": "on-service",
        "light": "off",
        "weight": 25,
        "country": "Bharat",
        "population": 1450935791
    }

---------------------------------------

# การ Deploy (Render Cloud)
    1.  อัปโหลด repo ไปที่ GitHub
    2.  เข้าเว็บไซต์ https://render.com → New → Web Service
    3.  เลือก repo drone_backend
    4.  ตั้งค่า environment variables ให้เหมือนใน .env
    5.  การ Deploy (Render Cloud)
        Build Command: npm install
        Start Command: npm start
    6.  กด Deploy และรอระบบสร้าง Server ขึ้นมา 
        หลัง Deploy เสร็จจะได้ URL มา

---------------------------------------

# Deployment Result
- Deployed URL	: https://drone-backend-uj55.onrender.com
- Status	    : ทำงานสมบูรณ์
- Region	    : Singapore
- Platform	    : Render Cloud
- Environment Variables ใช้งานได้จริง ; PORT, CONFIG_URL, LOG_URL, LOG_API_TOKEN
- Response      : ผ่านการทดสอบ Postman และ Browser

---------------------------------------

# ผู้พัฒนา
    65011024
    Sasiwimol Kaewmanee
    Sec 99 (WIL)

    