import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Counter extends React.Component {
    static propTypes = {
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        number: PropTypes.number,
    };

    handleIncrement = () => {
        const { increment } = this.props;
        increment();
    };

    handleDecrement = () => {
        const { decrement } = this.props;
        decrement();
    };

    render() {
        const { number } = this.props;
        return (
            <div>
                <div className="form-buttons">
                    <span className="info info_success">{number}</span>
                    <button type="button" className="button small" onClick={this.handleIncrement}>+</button>
                    <button type="button" className="button small" onClick={this.handleDecrement}>-</button>
                </div>
                <div>
                    <Link to="/currency">Go to currency</Link>
                </div>
            </div>
        );
    }
}