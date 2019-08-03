import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { decrement, increment } from '../actions';
import { Counter } from '../components/Counter';

@connect(state => ({
    number: state.counter.number,
}), dispatch => ({
    ...bindActionCreators({
        increment,
        decrement,
    }, dispatch),
}))
class CounterContainer extends React.Component {
    static propTypes = {
        increment: PropTypes.func,
        decrement: PropTypes.func,
        number: PropTypes.number,
    };

    render() {
        const { number, increment: inc, decrement: dec } = this.props;
        return (
            <div className="main">
                <a className="logo" />
                <div className="widget_block">
                    <Counter increment={inc} decrement={dec} number={number} />
                </div>
            </div>
        );
    }
}

export { CounterContainer };