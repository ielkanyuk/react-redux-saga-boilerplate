import { httpService } from "../../../common/dataProvider/httpService";
import * as mapper from './itemsMapper';

export const getItemsList = () =>
	httpService({
		url: `/api/items`,
		method: 'GET',
	})
		.then(response => mapper.itemsListToClient(response.data))
		.catch(() => {
			throw 'Не удалось получить список документов';
		});

export const removeItem = ({id}) =>
	httpService({
		url: `/api/items/${id}/delete`,
		method: 'DELETE',
	})
		.then(response => response.data)
		.catch(() => {
			throw 'Не удалось удалить документ';
		});