import { CurrencyContainer } from './containers/CurrencyContainer';

export function getRoutes() {
    return {
        retailPoints: {
            path: '/currency',
            index: true,
            exact: true,
            component: CurrencyContainer,
        },
    };
}