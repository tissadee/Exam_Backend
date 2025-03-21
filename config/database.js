const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crypto_exchange', 'root', '050321', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});
//crypto_exchange: ชื่อฐานข้อมูลที่คุณสร้างขึ้น
//root: ชื่อผู้ใช้ MySQL 
//password: รหัสผ่านของ MySQL 
//host: ที่อยู่ของ MySQL server 
module.exports = sequelize;