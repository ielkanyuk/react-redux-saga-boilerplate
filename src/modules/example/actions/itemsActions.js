import { createRequestActions } from '../../../common/helpers/createActions';

/**
 * Actions example
 */
export const getItems = createRequestActions('ITEMS.GET_LIST');
export const removeItem = createRequestActions('ITEMS.REMOVE');