import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { HYDRATE } from 'next-redux-wrapper';
import loading from './loading';
import user from './user';
import post from './post';
import write from './write'

import userSaga from './sagas/user';
import postSaga from './sagas/post';

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE: 
            console.log('HYDRATE', action);
            return { ...state, ...action.payload }; 
        default: {
            const combineReducer = combineReducers({
                loading,
                user,
                post,
                write
            });
            return combineReducer(state, action);
        }
    }
}


export function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(postSaga)
    ]);
}

export default rootReducer;