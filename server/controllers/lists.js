import mongoose from 'mongoose';
const List = mongoose.model('List');

export function getAll(req, res) {
  List
    .find({})
    .exec((err, lists) => err
      ? res.status(400).json({ message: err.errors })
      : res.status(200).send(lists)
    );
}

export function create(req, res) {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: { structure: { kind: 'permissions' } } });
  }

  List
    .create(req.body, (err, list) => err
      ? res.status(400).json({ message: err.errors })
      : res.status(200).send(list)
    );
}

export function remove(req, res) {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: { structure: { kind: 'permissions' } } });
  }

  List.findByIdAndRemove(req.params.listId, (err) => err
    ? res.status(400).json({ message: err.errors })
    : res.status(200).send(req.params.id)
  );
}


export function update(req, res) {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: { structure: { kind: 'permissions' } } });
  }

  List
    .findByIdAndUpdate(req.params.listId, { $set: req.body }, { new: true })
    .exec((err, list) => err
      ? res.status(400).json({ message: err.errors })
      : res.status(200).send(list)
    );
}
