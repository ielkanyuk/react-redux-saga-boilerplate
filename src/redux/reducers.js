// import { reducer as notifyReducer } from '../common/uiElements/Notify';

/**
 * Collect reducers from all modules
 * @param modules {[ApplicationModule]}
 */
export const configureReducers = (modules) => {
	const _reducers = {
		// notifications: createReducer(notifyReducer.initialState, notifyReducer.actionHandlers),
  };
  return modules
        .reduce((reducers, module) => {
          const r = module.getReducers(createReducer);
          return {...reducers, ...r}
        }, _reducers);
};

function defaultHandler(state, action) {
  return state;
}

function createReducer(initialState, actionHandlers) {
  return function reducer(state = initialState, action) {
    const handler = actionHandlers[action.type] || actionHandlers.default || defaultHandler;
    return handler(state, action);
  }
}

