const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Admin.deleteMany();

    const admin = new Admin({
      username: 'admin',
      password: 'password123'
    });

    await admin.save();

    console.log('Admin user seeded!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
