import * as mongoose from 'mongoose';

export const FiveSchema = new mongoose.Schema({
  sender: {type:String, required: true},
  reciever: {type:String, required: true},
  content: {type:String, required: true}
});

const Five = mongoose.model('Five', FiveSchema);

export default Five;