// pages/api/events.js

import { NextApiRequest, NextApiResponse } from "next";
import Event from "../models/Event";
import jwt from "jsonwebtoken";
import connectDB from "../utils/dbConnect";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { eventName, date, picture, timing, prize, entryFee, description } =
        req.body;

      const event = new Event({
        eventName,
        date,
        picture,
        timing,
        prize,
        entryFee,
        description,
      });

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
