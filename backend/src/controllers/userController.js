import { User } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";

// @desc Register a new User

// @router /api/users

// @ access public

export const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // let Us Check If The User Exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User Already Exist" });
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {}
});
