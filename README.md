# Exam_Backend
## คำอธิบายโปรเจค
โปรเจคนี้เป็นระบบ Backend สำหรับแลกเปลี่ยน Cryptocurrency โดยใช้ Node.js และ Sequelize เพื่อจัดการฐานข้อมูล MySQL
## ขั้นตอนการรันโปรเจค
### 1. ติดตั้ง dependencies
รัน cmd ในไฟล์ project ใช้คำสั่งต่อไปนี้เพื่อติดตั้ง dependencies  
```bash
npm install
```
### 2. ตั้งค่าฐานข้อมูล
อัปเดตข้อมูลการเชื่อมต่อฐานข้อมูลในไฟล์ config/database.js
แทนที่ 'root' และ 'password' ด้วยชื่อผู้ใช้และรหัสผ่าน MySQL ของคุณ
### 3. ข้อมูลทดสอบ
รันคำสั่งต่อไปนี้เพื่อสร้างตารางและข้อมูลทดสอบในฐานข้อมูล
```bash
node seeders/seed.js
```
### 4. ตรวจสอบข้อมูลในฐานข้อมูล
หลังจากรัน seed.js แล้ว คุณสามารถตรวจสอบข้อมูลในฐานข้อมูล MySQL ได้ดังนี้
1. เข้าสู่ MySQL
```bash
mysql -u root -p
```
2. ใช้ฐานข้อมูล crypto_exchange:
```sql
USE crypto_exchange;
```
3. ตรวจสอบข้อมูลในตารางต่าง ๆ:
```sql
SELECT * FROM Users;
SELECT * FROM Wallets;
SELECT * FROM Orders;
SELECT * FROM Transactions;
SELECT * FROM Payments;
SELECT * FROM KYCs;
SELECT * FROM ExchangeRates;
```

## API Endpoints
### Users

GET /api/users/:id: ดึงข้อมูลผู้ใช้

POST /api/users: สร้างผู้ใช้ใหม่

### Wallets

GET /api/wallets/:id: ดึงข้อมูลกระเป๋าเงิน

POST /api/wallets: สร้างกระเป๋าเงินใหม่

### Orders

GET /api/orders/:id: ดึงข้อมูลคำสั่งซื้อ/ขาย

POST /api/orders: สร้างคำสั่งซื้อ/ขายใหม่

### ธุรกรรม (Transactions)

GET /api/transactions/:id: ดึงข้อมูลธุรกรรม

POST /api/transactions: สร้างธุรกรรมใหม่

### Payments

GET /api/payments/:id: ดึงข้อมูลการชำระเงิน

POST /api/payments: สร้างการชำระเงินใหม่

### KYC

GET /api/kyc/:id: ดึงข้อมูลการยืนยันตัวตน

POST /api/kyc: สร้างข้อมูลการยืนยันตัวตนใหม่

### Exchange Rates

GET /api/exchange-rates/:id: ดึงข้อมูลอัตราแลกเปลี่ยน

POST /api/exchange-rates: สร้างข้อมูลอัตราแลกเปลี่ยนใหม่