import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: {type:String, required: true},
  surname: {type:String, required: true},
  username: {type:String, required: true}
});

const User = mongoose.model('User', UserSchema);

export default User;