import { CounterContainer } from './containers/CounterContainer';

export function getRoutes() {
    return {
        retailPoints: {
            path: '/',
            index: true,
            exact: true,
            component: CounterContainer,
        },
    };
}