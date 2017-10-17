import mongoose from 'mongoose';

const LocationStructureSchema = new mongoose.Schema({
  fields: [{
    order: { type: Number, default: 0 },
    name: { type: String, required: true },
    type: { type: String, required: true },
    list: { type: mongoose.Schema.Types.ObjectId, ref: 'List' },
    permissions: {
      read: {
        owner: { type: Boolean },
        scout: { type: Boolean },
        manager: { type: Boolean }
      },
      update: {
        owner: { type: Boolean },
        scout: { type: Boolean },
        manager: { type: Boolean }
      }
    }
  }]
});

module.exports = mongoose.model('LocationStructure', LocationStructureSchema);
module.exports.LocationStructureSchema = LocationStructureSchema;
