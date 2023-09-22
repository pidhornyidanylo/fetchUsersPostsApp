import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import { userReducer } from './user/userReducer';
import { postsReducer } from './posts/postsReducer';

const middlewareEnhancer = applyMiddleware(thunkMiddleware, logger);
const rootReducer = combineReducers({
    users: userReducer,
    posts: postsReducer
});


export const store = createStore(rootReducer, undefined, middlewareEnhancer);

export type RootState = ReturnType<typeof userReducer>;
export type RootStateTwo = ReturnType<typeof postsReducer>;