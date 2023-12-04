import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 30,
  },
  username: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 15,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 30,
  },
})

const User = model('User', UserSchema);

export default User;
