import { USER_ACTION_TYPES } from "./userActionTypes";
import { UserAction } from "./userActions";

interface UserState {
    users: any[],
    loading: boolean,
    error: null | boolean
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state:UserState = initialState, action: UserAction): UserState => {

    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.USERS_FETCH:
            return { loading: true, error: null, users: [] };
        case USER_ACTION_TYPES.USERS_FETCH_SUCCESS:
            return { loading: false, error: null, users: payload };
        case USER_ACTION_TYPES.USERS_FETCH_FAILED:
            return { loading: false, error: payload, users: [] }
        default:
            return state;
    }
}


