import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [{
    name: { type: String },
    order: { type: Number }
  }]
});

export default mongoose.model('List', ListSchema);
