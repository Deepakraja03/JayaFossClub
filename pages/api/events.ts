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

// Add isActive to your EventRequestBody interface
interface EventRequestBody {
  eventName: string;
  date: Date;
  picture: string;
  coordinator: string;
  timing: string;
  prize: number;
  entryFee: number;
  description: string;
  isActive: boolean; // Add this
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
        coordinator,
        timing,
        prize,
        entryFee,
        description,
      } = req.body as EventRequestBody;

      // Check if the event date is before the current date
      const currentDate = new Date();
      if (new Date(date).getTime() < currentDate.getTime()) {
        return res.status(400).json({ error: "Event date is in the past" });
      }

      const event = new Event({
        eventName,
        date,
        picture,
        coordinator,
        timing,
        prize,
        entryFee,
        description,
        isActive: true, // Set to true by default when creating the event
      }) as Document;

      await event.save();

      res.status(201).json({ message: "Event created successfully", event });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "GET") {
    try {
      let events = await Event.find();
      
      // Update isActive field for past events
      const currentDate = new Date();
      events = events.map((event: any) => {
        if (new Date(event.date).getTime() < currentDate.getTime()) {
          event.isActive = false;
          event.save(); // This is asynchronous, but we ignore the promise here for simplicity
        }
        return event;
      });

      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
