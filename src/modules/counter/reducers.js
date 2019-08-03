import { INCREMENT, DECREMENT } from './actions';

export const initialState = {
    number: 0,
};

export const actionHandlers = {
    [INCREMENT]: state => ({ ...state, number: state.number + 1 }),

    [DECREMENT]: state => ({ ...state, number: state.number - 1 }),
};
