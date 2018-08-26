import constants from './constants';

const initialState = {
	query: ''
};

export function QueryReducer (state = initialState, action) {
    switch (action.type) {
		case constants.QUERY:
            return {
                ...state,
				query: action.query || ''
            };
        default:
            return state
    }
}