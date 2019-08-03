/* eslint-disable no-underscore-dangle */
import { createStore, compose, combineReducers } from 'redux';

export const configureStore = ({ middleware, reducers, initState }) => {
    const appReducers = combineReducers({ ...reducers });

    //https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store/35641992#35641992
    //clear store
    const allReducers = (state, action) => {
        let nextState = state;
        if (action.type === '@@core/CLEAR_APP') {
            nextState = undefined;
        }
        return appReducers(nextState, action);
    };

    let enhancer;
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
            ...middleware,
        );
    } else {
        enhancer = compose(
            ...middleware,
        );
    }

    return createStore(allReducers,
        initState,
        enhancer);
};
