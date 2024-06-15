// src/sagas/index.ts
import { all } from 'redux-saga/effects';
import sampleSaga from './sampleSaga';

export default function* rootSaga() {
    yield all([
        sampleSaga(),
    ]);
}
