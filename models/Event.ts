import mongoose, { Schema, Document, Model, ObjectId } from 'mongoose';

interface IEvent extends Document {
  eventName: string;
  date: Date;
  picture: string;
  coordinator: string;
  timing: string;
  prize: string;
  entryFee: string;
  isActive: boolean;
  description: string;
}

const eventSchema: Schema = new Schema({
  eventName: { type: String, required: true },
  date: { type: Date, required: true },
  picture: { type: String, required: true },
  timing: { type: String, required: false },
  coordinator: { type: String, required: false },
  prize: { type: String, required: false },
  entryFee: { type: String, required: false },
  isActive: { type: Boolean, default: true },
  description: { type: String, required: false },
});

let EventModel: Model<IEvent>;

try {
  EventModel = mongoose.model<IEvent>('Event');
} catch (error) {
  EventModel = mongoose.model<IEvent>('Event', eventSchema);
}

export default EventModel;
