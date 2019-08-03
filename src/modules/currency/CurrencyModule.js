import { initialState, actionHandlers } from './reducers';
import { getRoutes } from './routes';
import { ApplicationModule } from '../ApplicationModule';
import { sagas } from './sagas';

class CounterModule extends ApplicationModule {
    /**
     * @override
     */
    getReducers(createReducer) {
        return {
            currency: createReducer(initialState, actionHandlers),
        };
    }

    /**
     * @override
     */
    getRoutes() {
        return getRoutes();
    }

    /**
     * @override
     */
    getSagas() {
        return sagas();
    }
}

export default new CounterModule();

// export function getSagas() {
//     return [
//         sagas(),
//         regKKTSaga(),
//         overdraftSaga()
//     ];
// }
