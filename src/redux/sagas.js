import { all } from 'redux-saga/effects';

export const configureSagas = (modules) => {
    const sagas = modules.reduce((list, module) => {
        if (module.getSagas) {
            return list.concat(module.getSagas());
        }
        return list;
    }, []);

    return function* () {
        yield all(sagas);
    };
};