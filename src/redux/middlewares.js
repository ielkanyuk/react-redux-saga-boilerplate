import {applyMiddleware} from 'redux';

/**
 * Inject custom middlewares from each modules
 * @param modules {[ApplicationModule]}
 * @param customMiddleWares
 * @return {*[]}
 */
export const configureMiddlewares = (modules, ...customMiddleWares) => {
	let middlewares = [...customMiddleWares];
	const composerFuncs = [];
	
	modules.forEach((module) => {
    	const moduleWares = module.getMiddlewares();
    	if (moduleWares) {
      		middlewares = [...middlewares, ...moduleWares];
    	}
  	});

  	return [
	  	applyMiddleware(...middlewares),
	  	...composerFuncs,
  	];
};