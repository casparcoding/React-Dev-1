import { combineReducers } from 'redux'
import { FriendsReducer as friends}  from "../../src/routes/friends/modules/friends-reducer";
import { QueryReducer as query } from '../../src/routes/friends/modules/query-reducer'

const rootReducer = combineReducers({
	friends,
	query
});

export default rootReducer