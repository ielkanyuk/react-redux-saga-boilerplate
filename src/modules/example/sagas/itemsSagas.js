/** @section @import */
import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as actions from '../actions/itemsActions';
import * as dataContext from '../dataProvider/itemsDataContext';

export default function* () {
	yield takeEvery(actions.getItems.request, getItemsList);
	yield takeEvery(actions.removeItem.request, removeItem);	
}

function* getItemsList() {
    try {
        const data = yield call(dataContext.getItemsList);
        yield put(actions.getItems.success(data));
    } catch (e) {
        yield put(actions.getItems.failure());
		// yield put(notify.error('Произошла ошибка при получении списка документов', 'Ошибка'));
    }
}

function* removeItem({ payload }) {
	try {
        yield call(dataContext.removeItem, payload);
        yield put(actions.removeItem.success(payload));
		// yield put(notify.success('Документ удален'));
    } catch (e) {
        yield put(actions.removeItem.failure());
    }
}