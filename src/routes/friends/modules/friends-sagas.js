import { put, take, cancel, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';

// imported files
import getFriends from './api'
import constants from './constants'

// worker
function* fetchFriends (query) {
    try {
        // debounce by 100ms
        yield delay(100);
        const data = yield getFriends(query);
        yield put({ type: constants.FETCH_FRIENDS, payload: data })

    } catch (e) {
        yield put({type: constants.FETCHING_FRIENDS_FAILURE, payload: e})
    }
}


// watcher
function* friendsSaga () {

    // this handles concurrent tasks
    let currentTask;

    while(true) {

        const { query }= yield take(constants.QUERY);

        if(currentTask) {
            yield cancel(currentTask);
        }

        currentTask = yield fork(fetchFriends, query);
    }

}


export default friendsSaga