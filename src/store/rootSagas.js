import { fork, all } from 'redux-saga/effects';
import friendsSaga from "../../src/routes/friends/modules/friends-sagas";


export function* rootSaga() {
    yield all([
        friendsSaga,
    ].map(fork));
}