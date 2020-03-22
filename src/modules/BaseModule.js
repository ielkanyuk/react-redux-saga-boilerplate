/**
 * Base module which extends others
 */
export class BaseModule {
    /**
     * Reducers object for configure redux store
     * @param createReducer {Function} redux helper function for create reducer node
     * @return {{}}
     */
    getReducers(createReducer) {
      return {};
    }
  
    /**
     * Routes for module containers
     * @return {{}}
     */
    getRoutes() {
      return {};
    }
  
    /**
     * Sagas collection for configure in middleware
     * @return {Array}
     */
    getSagas() {
      return [];
    }
  
    /**
     * Custom middlewares for module if need
     * @return {[]|null}
     */
    getMiddlewares() {
      return null;
    }
  }
  