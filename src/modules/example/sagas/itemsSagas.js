/** @section @import */
import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as actions from '../actions/itemsActions';
import * as dataContext from '../dataProvider/dataContext';

export default function* () {
	yield takeEvery(actions.getItems.request, getItemsList);
	yield takeEvery(actions.removeItem.request, removeItem);	
}

function* getItemsList({ payload }) {
    try {
        const form = yield select(state => state.form.listFilterForm.values || {});
        const data = yield call(dataContext.getDocList, form, payload);
        yield put(actions.documents.success(data));
    } catch (e) {
        yield put(actions.documents.failure());
		// yield put(notify.error('Произошла ошибка при получении списка документов', 'Ошибка'));
    }
}

function* removeItem({ payload }) {
	try {
        yield call(dataContext.removeDocument, payload);
        yield put(actions.removeDocument.success(payload));
		// yield put(notify.success('Документ удален'));
    } catch (e) {
        yield put(actions.removeDocument.failure());
    }
}