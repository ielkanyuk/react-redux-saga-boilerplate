import { initialState, actionHandlers } from './reducers';
import { getRoutes } from './routes';
import { ApplicationModule } from '../ApplicationModule';

class CounterModule extends ApplicationModule {
    /**
     * @override
     */
    getReducers(createReducer) {
        return {
            counter: createReducer(initialState, actionHandlers),
        };
    }

    /**
     * @override
     */
    getRoutes() {
        return getRoutes();
    }
}

export default new CounterModule();
