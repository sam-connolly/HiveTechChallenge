export const User = mongoose.model('User', {
  firstName: String,
  surname: String,
  username: String
});

import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: {type:String, required: true},
  surname: {type:String, required: true},
  username: {type:String, required: true}
});

const Five = mongoose.model('Five', FiveSchema);

export default Five;