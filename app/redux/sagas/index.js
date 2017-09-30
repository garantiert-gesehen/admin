import { fork, all } from 'redux-saga/effects';

import user from './user';
import locationStructure from './locationStructure';

export default function* root() {
  yield all([
    fork(user),
    fork(locationStructure)
  ]);
}
