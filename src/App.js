import React from 'react';
import {Provider} from 'react-redux';
import configureRedux from './redux';
import {Router,Switch,Route,Link} from 'react-router-dom';
import ExampleModule from './modules/example/module';
import About from './modules/example/components/About';
import './App.css';

const modules = [ExampleModule];
const {store, routes, history} = configureRedux({modules, initState: {}});

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<React.Fragment>
            <div className="App">
            <header className="App-header">
              <ul>
                <li>
                  <Link to="/" className="App-link">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="App-link">About</Link>
                </li>
              </ul>

              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
              </header>
            </div>
					</React.Fragment>
				</Router>
			</Provider>
		);
	}
}
