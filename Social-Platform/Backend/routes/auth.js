// import express from 'express';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import User from '../models/User.js';

// const router = express.Router();

// // Environment variables
// import dotenv from 'dotenv';
// dotenv.config();

// // JWT Secret Key
// const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// // Register User
// router.post('/register', async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;

//   try {
//     // Check if user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     // Create a new user
//     const user = new User({ firstName, lastName, email, password });

//     // Save the user to the database
//     await user.save();

//     // Generate a token
//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

//     // Send response
//     res.status(201).json({ message: 'User registered successfully', token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // POST request to /api/auth/login
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
  
//     // Find user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }
  
//     // Compare the password with the hashed password in the database
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }
  
//     // Generate JWT token
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
//     // Send token as response
//     res.status(200).json({ token });
//   });
  

// export default router;
