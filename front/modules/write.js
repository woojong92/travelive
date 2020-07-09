import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

// export const initialize = {
//     type: INITIALIZE
// }
// export const changeField = {
//     type: CHANGE_FIELD
// }

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value}) => ({
    key, 
    value,
}));


const initialState = {
    title: '',
    body: '',
    tags: []
}

export default handleActions(
    {
        [INITIALIZE] : state => initialState,
        [CHANGE_FIELD] : (state, {payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        })
    },
    initialState,
);

// export default (state=initialState, action) => {
//     switch(action.type) {
//         case INITIALIZE : {
//             return {

//             }
//         }
//         case CHANGE_FIELD : {
//             return {

//             }
//         }
//         default : {
//             return state;
//         }
//     }
// }

