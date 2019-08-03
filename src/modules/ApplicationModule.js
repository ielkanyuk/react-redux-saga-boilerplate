/**
 * Base module which extends others
 */
export class ApplicationModule {
    /**
     * Reducers object for configure redux store
     * @param createReducer {Function} redux helper function for create reducer node
     * @return {{}}
     */
    // eslint-disable-next-line no-unused-vars
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