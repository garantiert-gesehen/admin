'use strict';

import mongoose from 'mongoose';
const LocationStructure = mongoose.model('LocationStructure');
const Location = mongoose.model('Location');

export function selectCurrentStructure() {
  return LocationStructure
    .findOne()
    .sort({ created_at: -1 })
}

export function getCurrentStructure(req, res) {
  selectCurrentStructure()
    .exec((err, locationStructure) => {
      if(!err) {
        return res.json(locationStructure);
      }

      console.log('Error in first query');
  });
}

export function updateCurrentStructure(req, res) {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: { structure: { kind: 'permissions' } } });
  }

  LocationStructure.findOneAndUpdate({}, { $set: { fields: req.body } }, { new: true, sort: { 'created_at' : -1 } })
    .exec((err, locationStructure) => {
      if (!err && !locationStructure) {
        LocationStructure.create({ fields: req.body }, (err, data) => {
          if (err) {
            return err
              ? res.status(400).json({ message: err.errors })
              : res.status(200).send(data);
          }
        });
      }

      if(!err) {
        return res.json(locationStructure);
      }

      console.log('Error in first query');
    });
}
