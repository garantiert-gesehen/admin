import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const LocationSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  fields: [{
    ref: { type: String, required: true },
    value: { type: String, required: true }
  }],
  dateCreated: { type: Date, default: Date.now },
  values: { type: String }
});

LocationSchema.plugin(mongoosePaginate);

export default mongoose.model('Location', LocationSchema);
