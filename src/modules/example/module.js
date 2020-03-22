import itemsReducer from './reducers/itemsReducer';
import { getRoutes } from './routes';
import { BaseModule } from '../BaseModule';
import itemsSagas from './sagas/itemsSagas';

class ExampleModule extends BaseModule {
    /**
     * @override
     */
    getReducers(createReducer) {
        return {
            items: itemsReducer(createReducer),
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
        return [
            itemsSagas(),
        ];
    }
}

export default new ExampleModule;