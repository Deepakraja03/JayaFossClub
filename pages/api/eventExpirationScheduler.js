import Event from "../models/Event";
import mongoose from "mongoose";
import cron from "node-cron";

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const updateExpiredEvents = async () => {
  try {
    const currentDate = new Date();
    const expiredEvents = await Event.find({ date: { $lt: currentDate } });

    for (const event of expiredEvents) {
      if (event.isActive) {
        event.isActive = false;
        await event.save();
        console.log(`Event "${event.eventName}" has been marked as inactive.`);
      }
    }
  } catch (error) {
    console.error("Error updating expired events:", error);
  }
};

// Schedule the task to run every day at a specific time (e.g., 2:00 AM)
cron.schedule("0 2 * * *", updateExpiredEvents);
