import constants from './constants';

const initialState = {
    friends: [],
    isFetching: false,
	error: false,
	// query: ''
};

export function FriendsReducer (state = initialState, action) {
    switch (action.type) {
        case constants.FETCH_FRIENDS:
            return {
                ...state,
                friends: action.payload,
                isFetching: false
            };
        case constants.FETCHING_FRIENDS_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}