import constants from './constants';

export function fetchFriends() {
    return {
        type: constants.FETCH_FRIENDS
    }
}


export function getQuery(query) {
    return {
        type: constants.QUERY,
        query
    };
}