import bcrypt from "bcrypt";
import User from "../../../models/User"; // Adjust the path to your User model
import jwt from "jsonwebtoken";
import mongoose, { Document } from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectDB();

interface SignupRequest {
  body: {
    username: string;
    password: string;
  };
  method: string;
}

interface SignupResponse {
  status: (statusCode: number) => SignupResponse;
  json: (data: object) => void;
}

export default async function handler(req: SignupRequest, res: SignupResponse): Promise<void> {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({
      username,
      password: hashedPassword,
    }) as Document;

    await user.save();

    const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET!);

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
