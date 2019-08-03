import React from 'react';
import PropTypes from 'prop-types';

export class CurrencyView extends React.Component {
    static propTypes = {
        rate: PropTypes.number,
        pair: PropTypes.string,
        loading: PropTypes.bool.isRequired,
        update: PropTypes.func.isRequired,
        error: PropTypes.string,
    };

    handleUpdate = (e) => {
        const { update } = this.props;
        update({ currencyPair: e.target.value });
    }

    render() {
        const {
            rate, pair, loading, error,
        } = this.props;

        return (
            <div className="form">
                <div className="form_buttons">
                    <select onChange={this.handleUpdate} value={pair || ''}>
                        <option value="">---</option>
                        <option value="EUR_USD">EUR_USD</option>
                        <option value="EUR_RUB">EUR_RUB</option>
                        <option value="USD_RUB">USD_RUB</option>
                    </select>
                </div>
                <br />
                {error && <span>{error}</span>}
                {loading && <span>Loading...</span>}
                {rate && (
                    <div className="form_group">
                        <div>
                            PAIR: {pair}, VALUE: {rate}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}