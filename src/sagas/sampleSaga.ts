// src/sagas/sampleSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';

// Mock API call
const fetchDataFromApi = (): Promise<string[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Item 1', 'Item 2', 'Item 3']);
        }, 1000);
    });
};
const fetchDataFromApi2 = (): Promise<string[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Item 33', 'Item 66', 'Item 99']);
        }, 1000);
    });
};

function* fetchData() {
    try {
        const data: string[] = yield call(fetchDataFromApi);
        yield put({ type: 'FETCH_DATA_SUCCESS', payload: data });
        const data2: string[] = yield call(fetchDataFromApi2);
        yield put({ type: 'FETCH_DATA_SUCCESS', payload: data2 });
    } catch (error: any) {
        yield put({ type: 'FETCH_DATA_FAILURE', error: error.message });
    }
}

function* sampleSaga() {
    yield takeLatest('FETCH_DATA_REQUEST', fetchData);
}

export default sampleSaga;
