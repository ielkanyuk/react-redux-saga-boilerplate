import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchCurrencyRate } from '../actions';
import { CurrencyView } from '../components/CurrencyView';

@connect(state => ({
    rate: state.currency.rate,
    error: state.currency.error,
    loading: state.currency.loading,
    pair: state.currency.pair,
}), dispatch => ({
    ...bindActionCreators({
        fetchRate: fetchCurrencyRate,
    }, dispatch),
}))
class CurrencyContainer extends React.Component {
    static propTypes = {
        rate: PropTypes.number,
        error: PropTypes.string,
        loading: PropTypes.bool,
        pair: PropTypes.string,
        fetchRate: PropTypes.func,
    };

    handleSelectCurrencyPair = ({ currencyPair }) => {
        const { fetchRate } = this.props;
        fetchRate({ currencyPair });
    }

    render() {
        const {
            rate, error, loading, pair,
        } = this.props;
        return (
            <div className="main">
                <div className="widget_block">
                    <CurrencyView
                        loading={loading}
                        update={this.handleSelectCurrencyPair}
                        pair={pair}
                        error={error}
                        rate={rate}
                    />
                </div>
            </div>
        );
    }
}

export { CurrencyContainer };