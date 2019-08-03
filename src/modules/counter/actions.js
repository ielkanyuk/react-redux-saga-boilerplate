import { createAction } from '../../common/helpers/createAction';

export const INCREMENT = 'COUNTER.INCREMENT';
export const DECREMENT = 'COUNTER.DECREMENT';

export const increment = () => createAction(INCREMENT);
export const decrement = () => createAction(DECREMENT);