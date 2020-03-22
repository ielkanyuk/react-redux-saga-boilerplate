import React from 'react';
import {Provider} from 'react-redux';
import configureRedux from './redux';
import {Router} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

const modules = [];
const {store, routes, history} = configureRedux({modules, initState: {}});

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<React.Fragment>
            <div className="App">
              <header className="App-header">
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
              </header>
            </div>
					</React.Fragment>
				</Router>
			</Provider>
		);
	}
}
