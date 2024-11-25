import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { log } from "console";

export  const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    };

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'User not found' });
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ error: 'Invalid password' });
    
        const token = jwt.sign({ userId: user._id }, 'secret-key');
        res.status(200).json({ token });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};

export const usersList = async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude passwords
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};