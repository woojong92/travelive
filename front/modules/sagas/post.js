import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
// import axios from 'axios';
import {
LOAD_POSTS_REQUEST,
LOAD_POSTS_SUCCESS,
LOAD_POSTS_FAILURE,

UPLOAD_POST_REQUEST,
UPLOAD_POST_SUCCESS,
UPLOAD_POST_FAILURE,

READ_POST_REQUEST,
READ_POST_SUCCESS,
READ_POST_FAILURE,

UPDATE_POST_REQUEST,
UPDATE_POST_SUCCESS,
UPDATE_POST_FAILURE,

DELETE_POST_REQUEST,
DELETE_POST_SUCCESS,
DELETE_POST_FAILURE
} from '../post';

function* loadPosts() {
    console.log('loadPost')
    try{
        // const result = yield call(loadPostsAPI, action.data);
        yield delay(2000);
        yield put({
            type: LOAD_POSTS_SUCCESS,
        })
    }catch(error) {
        yield put({
            type: LOAD_POSTS_FAILURE,
            data: error.response.message
        })
    }
}

function* uploadPost() {
    console.log('uploadPost')
    try{
        yield delay(2000)
        yield put({
            type: UPLOAD_POST_SUCCESS
        })
    }catch(error) {
        yield put({
            type: UPLOAD_POST_FAILURE,
            error: error
        })
    }
}

function* readPost() {
    try{
        yield delay(2000)
        yield put({
            type: READ_POST_SUCCESS
        })
    }catch(error) {
        yield put({
            type: READ_POST_FAILURE,
            error: error
        })
    }
}

function* updatePost() {
    try{
        yield delay(2000)
        yield put({
            type: UPDATE_POST_SUCCESS
        })
    }catch(error) {
        yield put({
            type: UPDATE_POST_FAILURE,
            error: error
        })
    }
}

function* deletePost() {
    try{
        yield delay(2000)
        yield put({
            type: DELETE_POST_SUCCESS
        })
    }catch(error) {
        yield put({
            type: DELETE_POST_FAILURE,
            error: error
        })
    }
}

function* watchLoadPosts() {
    yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}

function* watchUploadPost() {
    yield takeLatest(UPLOAD_POST_REQUEST, uploadPost)
}

function* watchReadPost() {
    yield takeLatest(READ_POST_REQUEST, readPost)
}

function* watchUpdatePost() {
    yield takeLatest(UPDATE_POST_REQUEST, updatePost)
}

function* watchDeletePost() {
    yield takeLatest(DELETE_POST_REQUEST, deletePost)
}

export default function* userSaga() {
    yield all([
        fork(watchLoadPosts),
        fork(watchUploadPost),
        fork(watchReadPost),
        fork(watchUpdatePost),
        fork(watchDeletePost)
    ])
}