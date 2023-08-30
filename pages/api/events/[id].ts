// pages/api/events/[id].js

import { NextApiRequest, NextApiResponse } from "next";
import Event from "../../../models/Event";
import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "DELETE") {
    try {
      const eventId = req.query.id; // Event ID from the URL

      if (!eventId) {
        return res.status(400).json({ error: "Event ID is required" });
      }

      // Find the event by ID and delete it
      const deletedEvent = await Event.findByIdAndDelete(eventId);

      if (!deletedEvent) {
        return res.status(404).json({ error: "Event not found" });
      }

      // Return the updated list of events after deletion
      const updatedEvents = await Event.find();

      res.status(200).json(updatedEvents);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
