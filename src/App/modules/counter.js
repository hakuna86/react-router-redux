import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);


const initialState = {
    counter : 0
};

export default handleActions({
    [INCREMENT]: (state, action) => produce(state, draft => {
        draft.counter++
    }),
    [DECREMENT]: (state, action) => produce(state, draft => {
        draft.counter--
    }),
}, initialState);
