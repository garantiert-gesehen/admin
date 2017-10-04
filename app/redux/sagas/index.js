import { fork, all } from 'redux-saga/effects';

import user from './user';
import locationStructure from './locationStructure';
import locations from './locations';

export default function* root() {
  yield all([
    fork(user),
    fork(locationStructure),
    fork(locations)
  ]);
}
