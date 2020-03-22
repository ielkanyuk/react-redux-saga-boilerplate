import React from 'react';
import logo from '../../../logo.svg';

export default class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                        Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        Learn React
                        </a>
            </React.Fragment>
        );
    }
}