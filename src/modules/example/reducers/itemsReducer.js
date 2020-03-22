import * as actions from '../actions/itemsActions';

const initialState = {
	loading: false,
	busy: false,
	list: [],
	name: '',
	shortName: '',
	foreignName: '',
	foreignAddress: '',
	type: '',
	totalCount: 0,
	next: null,
	noItems: null,
	noMoreItems: null,
	limit: 20,
};

const actionHandlers = {
	[actions.getItems.request]: (state, { payload }) => ({
        ...state,
        loading: !payload.next,
        busy: !!payload.next,
	}),
	[actions.getItems.success]: (state, { payload }) => {
		const noMoreItems = payload.elements.length < state.limit || !payload.next;
		const next = noMoreItems ? null : payload.next;
		let list = [];
		let totalCount;

		if (payload.loadOnScroll) {
			list = [...state.list, ...payload.elements];
			totalCount = state.totalCount;
		} else {
			list = payload.elements;
			totalCount = payload.totalCount;
		}

		return {
			...state,
			list,
			totalCount,
			noItems: totalCount === 0,
			noMoreItems: totalCount === 0 ? null : noMoreItems,
			next,
			loading: false,
            busy: false,
			type: payload.type,
		};
	},
	[actions.getItems.failure]: (state, action) => ({
        ...state,
        loading: false,
        busy: false,
    }),

	[actions.removeItem.success]: (state, action) => ({
    	...state,
    	list: state.list.filter((item) => 
			item.id !== action.payload.id
		),
	}),
};

export {initialState, actionHandlers};
export default createReducer => createReducer(initialState, actionHandlers);