import { NextApiRequest, NextApiResponse } from "next";
import Event from "../../models/Event";
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

interface EventRequestBody {
  eventName: string;
  date: Date;
  picture: string;
  timing: string;
  prize: number;
  entryFee: number;
  description: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "POST") {
    try {
      const {
        eventName,
        date,
        picture,
        timing,
        prize,
        entryFee,
        description,
      } = req.body as EventRequestBody;

      const event = new Event({
        eventName,
        date,
        picture,
        timing,
        prize,
        entryFee,
        description,
      }) as Document;

      await event.save();

      res.status(201).json({ message: "Event created successfully", event });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "GET") {
    try {
      const events = await Event.find();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
