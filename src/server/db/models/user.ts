import { model, Schema, Model, Document } from 'mongoose';
import bcrypt from 'bcrypt-ts';
import createErr from '../../util/createErr';

interface IUser extends Document {
  username: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(createErr({
      method: 'userSchema.pre',
      type: 'Password hashing error',
      err
    }));
  }
});

const User: Model<IUser> = model('user', userSchema);

export default User;