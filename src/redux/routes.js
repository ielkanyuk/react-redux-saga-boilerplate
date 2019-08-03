const getRouteFromSection = routesObject => Object.keys(routesObject).reduce((prev, key) => {
    const route = routesObject[key];

    if (route.nested) {
        route.nested = getRouteFromSection(route.nested);
    }

    return [...prev, route];
}, []);

/**
 * React-router v4 declarative mode style
 * Route Flags
 * - index:true - index page
 * - path - v4-docs
 * - exact - v4-docs
 * - strict - v4-docs
 * - component - v4-docs
 * - isLayer - if this page open in popup with change url
 * - layout - master page, if null page render without master-layout
 * - nested - child pages for section
 */

/**
 * Reduce object with routes to array
 * @param modules {[ApplicationModule]}
 */
export const configureRoutes = modules => modules.reduce((routes, module) => {
    const routesObject = module.getRoutes();
    const routesArray = getRouteFromSection(routesObject);
    return [...routes, ...routesArray];
}, []);