import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  dateCreated: { type: Date, default: Date.now },
  structure: { type: mongoose.Schema.Types.ObjectId, ref: 'Structure' },
  values: { type: String }
});

LocationSchema.plugin(mongoosePaginate);

export default mongoose.model('Location', LocationSchema);
