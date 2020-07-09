import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
// import axios from 'axios';
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
} from '../user';

function* login() {
    try{
        // const result = yield call(loginAPI, action.data);
        yield delay(2000);
        yield put({
            type: LOG_IN_SUCCESS,
        })
    }catch(error) {
        yield put({
            type: LOG_IN_FAILURE,
            data: error.response.message
        })
    }
}

function* signup() {
    try{
        yield delay(2000)
        yield put({
            type: SIGN_UP_SUCCESS
        })
    }catch(error) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: error
        })
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signup)
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchSignUp)
    ])
}