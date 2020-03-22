import itemsReducer from './reducers/itemsReducer';
import { getRoutes } from './routes';
import { BaseModule } from '../';
import documentsSagas from './sagas/documents';
import allDocsSagas from './sagas/allDocsSagas';
import catalogSagas from './sagas/catalog';
import outgoingForeignTransferSagas from './sagas/outgoingForeignTransfer';
import clientsReducer from './reducers/clientsReducer';
import clientsSagas from './sagas/clientsSagas';

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
        ];
    }
}

export default new ExampleModule;