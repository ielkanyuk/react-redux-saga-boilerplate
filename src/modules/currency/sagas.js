import {
    call, put, takeEvery, all,
} from 'redux-saga/effects';
import { getCurrency } from '../../dataProvider/currencyApi';
import {
    setRateFail, setRateSuccess, loadingCurrencyRate, FETCH_CURRENCY_RATE,
} from './actions';

/**
 * Fetch data from api and set to store
 * @param currencyPair
 */
function* fetchCurrencyRate({ meta }) {
    try {
        yield put(loadingCurrencyRate({ loading: true }));
        const response = yield call(getCurrency, {
            currencyPair: meta.currencyPair,
        });
        yield put(setRateSuccess({
            rate: response.data[meta.currencyPair].val,
            currencyPair: meta.currencyPair,
        }));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        yield put(setRateFail({ error: error.message }));
    } finally {
        yield put(loadingCurrencyRate({ loading: false }));
    }
}

export const sagas = function* () {
    yield all([
        takeEvery(FETCH_CURRENCY_RATE, fetchCurrencyRate),
    ]);
};