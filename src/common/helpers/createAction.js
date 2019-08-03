/**
 * create action helper
 * @param type
 * @param payload
 * @returns {{type: *}}
 */
export function createAction(type, payload = {}) {
    return { type, payload };
}

export function createEffect(type, meta = {}) {
    return { type, meta };
}
