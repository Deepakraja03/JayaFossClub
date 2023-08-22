import mongoose, { Schema, Document, Model } from 'mongoose';

interface IEvent extends Document {
  eventName: string;
  date: Date;
  picture: string;
  timing: string;
  prize: string;
  entryFee: number;
  isActive: boolean;
  description: string;
}

const eventSchema: Schema = new Schema({
  eventName: { type: String, required: true },
  date: { type: Date, required: true },
  picture: { type: String, required: true },
  timing: { type: String, required: false },
  prize: { type: String, required: false },
  entryFee: { type: Number, required: false },
  isActive: { type: Boolean, default: true },
  description: { type: String, required: false },
});

let EventModel: Model<IEvent>;

try {
  EventModel = mongoose.model('Event');
} catch (error) {
  EventModel = mongoose.model('Event', eventSchema);
}

export default EventModel;
