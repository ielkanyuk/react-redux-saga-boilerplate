import axios from 'axios';

export const getCurrency = ({ currencyPair }) => axios.get('http://free.currencyconverterapi.com/api/v5/convert', {
    params: {
        q: currencyPair,
        compact: 'y',
    },
});