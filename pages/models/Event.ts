// models/Event.js

import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventName: String,
  date: Date,
  picture: String,
  timing: String,
  prize: String,
  entryFee: Number,
  isActive: Boolean,
  description: String,
});

let Event;

try {
  Event = mongoose.model("Event");
} catch {
  Event = mongoose.model("Event", eventSchema);
}

export default Event;
