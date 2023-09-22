import { USER_ACTION_TYPES } from "./userActionTypes"; 

export interface UserAction {
    type: string;
    payload?: any;
}

export interface FetchUsers {
    type: USER_ACTION_TYPES.USERS_FETCH
}

export interface FetchUsersSuccess {
    type: USER_ACTION_TYPES.USERS_FETCH_SUCCESS;
    payload: any[]
}

export interface FetchUsersFailed {
    type: USER_ACTION_TYPES.USERS_FETCH_FAILED;
    payload: string
}