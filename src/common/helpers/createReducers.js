export const createReducer = (actionHandlers) =>
    Object.keys(actionHandlers).reduce((prev, key) => {
      prev[key] = (state, action) => actionHandlers[key](state, action.payload);
      return prev;
    }, {});