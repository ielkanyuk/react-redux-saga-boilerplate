import { createAction, createEffect } from '../../common/helpers/createAction';

export const SET_RATE_SUCCESS = 'CURRENCY.SET_RATE_SUCCESS';
export const LOADING_CURRENCY_RATE = 'CURRENCY.LOADING_CURRENCY_RATE';
export const SET_RATE_FAIL = 'CURRENCY.SET_RATE_FAIL';
export const FETCH_CURRENCY_RATE = 'CURRENCY.FETCH_CURRENCY_RATE';

export const setRateSuccess = ({ rate, currencyPair }) => createAction(SET_RATE_SUCCESS, {
    rate, currencyPair,
});

export const setRateFail = ({ error }) => createAction(SET_RATE_FAIL, { error });

export const loadingCurrencyRate = ({ loading }) => createAction(LOADING_CURRENCY_RATE, {
    loading,
});

export const fetchCurrencyRate = ({ currencyPair }) => createEffect(FETCH_CURRENCY_RATE, {
    currencyPair,
});