const defaultHandler = state => state;
const createReducer = (initialState, actionHandlers) => (state = initialState, action) => {
    const handler = actionHandlers[action.type] || actionHandlers.default || defaultHandler;
    return handler(state, action);
};

/**
 * Collect reducers from all modules
 * @param modules {[ApplicationModule]}
 */
export const configureReducers = modules => modules.reduce((reducers, module) => {
    const r = module.getReducers(createReducer);
    return { ...reducers, ...r };
}, {});
