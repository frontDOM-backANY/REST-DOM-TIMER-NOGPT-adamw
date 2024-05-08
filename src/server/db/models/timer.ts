import { model, Schema, Model, Document } from 'mongoose';

interface ITimer extends Document {
  label?: string;
  description?: string;
  timestampStart?: Date;
  timestampEnd?: Date;
  userID: Schema.Types.ObjectId;
}

const timerSchema = new Schema<ITimer>({
  label: String,
  description: String,
  timestampStart: Date(),
  timestampEnd: Date(),
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

const Timer: Model<ITimer> = model('timer', timerSchema);

export default Timer;