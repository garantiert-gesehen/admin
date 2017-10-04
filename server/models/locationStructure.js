import mongoose from 'mongoose';

const LocationStructureSchema = new mongoose.Schema({
  fields: [{
    name: { type: String, required: true },
    type: { type: String, required: true },
    items: [{
      name: String
    }],
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
