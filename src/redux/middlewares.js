import { applyMiddleware } from 'redux';

/**
 * Inject custom middlewares from each modules
 * @param modules {[BaseModule]}
 * @param customMiddleWares
 * @return {*[]}
 */
export const configureMiddlewares = (modules, ...customMiddleWares) => {
    const composerFuncs = [];
    const middlewares = [...customMiddleWares];

    modules.forEach((module) => {
        const moduleWares = module.getMiddlewares();
        if (moduleWares) {
            middlewares.push(...moduleWares);
        }
    });

    return [
        applyMiddleware(...middlewares.filter(s => !!s)),
        ...composerFuncs,
    ];
};