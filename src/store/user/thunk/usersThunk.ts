import { USER_ACTION_TYPES } from "../userActionTypes"
import { Dispatch } from 'redux';
import { UserAction } from "../userActions";

export const thunkFunc = () => {
    return async(dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: USER_ACTION_TYPES.USERS_FETCH });
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();
            dispatch({ type: USER_ACTION_TYPES.USERS_FETCH_SUCCESS, payload: result })
        } catch (e) {
            dispatch({ type: USER_ACTION_TYPES.USERS_FETCH_FAILED, payload: 'Error occured while fetching users' });
        }
    }
}