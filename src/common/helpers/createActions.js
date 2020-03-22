const REQUEST_ACTIONS = [
	'request',
	'success',
	'failure',
];

/**
 * Create action
 * @param enums {String}
 * @param action {null|Function}
 * @returns {Function}
 */
export const createAction = (enums, action = null) => {
	const type = enums.toUpperCase();
	const func = action instanceof Function
		? payload => ({...(action(payload)), type})
		: (payload = {}) => ({payload, type});

	func.toString = () => type;

	return func;
};

/**
 * Boilerplate for create action requests
 * @param enums {String}
 * @param actions {Object}
 * @returns {Object} [{request: () => ({}), success: () => ({}), failure: () => ({})}]
 */
export const createRequestActions = (enums, actions = {}) =>
	[...REQUEST_ACTIONS, ...(Object.keys(actions))]
		.reduce((accumulator, currentValue) => {
			const type = `${enums}.${currentValue.toUpperCase()}`;
			const func = actions[currentValue] instanceof Function
				? payload => ({...(actions[currentValue](payload)), type})
				: (payload = {}) => ({payload, type});

			func.toString = () => type;

			return {
				...accumulator,
				[currentValue]: func,
			};
		}, {});