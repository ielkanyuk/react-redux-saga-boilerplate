import {createBrowserHistory} from 'history'
import createSagaMiddleware from 'redux-saga';
import {configureRoutes} from "./routes";
import {configureStore} from "./store";
import {configureMiddlewares} from './middlewares';
import {configureReducers} from './reducers';
import {configureSagas} from "./sagas";
import {routerMiddleware} from 'connected-react-router';

/**
 * Configure redux store and middlewares by ApplicationModule array
 * @param modules {[ApplicationModule]}
 * @param initState
 * @return {{store: *, routes: *, history: *}}
 */
export default ({modules, initState}) => {
  const history = createBrowserHistory();
  const sagaMiddleware = createSagaMiddleware();
  const routes = configureRoutes(modules);
  const middleware = configureMiddlewares(modules, sagaMiddleware, routerMiddleware(history));

  const store = configureStore(
    {
      middleware,
      reducers: configureReducers(modules),
      initState,
      history,
    }
  );

  function runSagas() {
    const task = sagaMiddleware.run(configureSagas(modules));
    // task.done.catch(error => {
    //   //@if DEBUG
		// 	//eslint-disable-next-line
		// 	console.error('Ошибка в saga', error);
		// 	//@endif
    //   runSagas();
    //   store.dispatch({type: '@@core/GLOBAL_SAGA_ERROR', error});
    // });
  }

  runSagas();

  return {store, routes, history};
};