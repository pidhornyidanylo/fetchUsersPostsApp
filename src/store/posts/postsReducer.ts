import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootStateTwo } from '../store';


// define action types

export enum POSTS_ACTION_TYPES {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED'
}

// define a single post type

// interface Post {
//     userId: number,
//     id: number,
//     title: string,
//     body: string
// }

// define actions based on types

export interface PostsAction {
    type: string,
    payload?: any
}

export interface FetchPostsAction {
    type: POSTS_ACTION_TYPES.FETCH_POSTS
}

export interface FetchPostsSuccessAction {
    type: POSTS_ACTION_TYPES.FETCH_POSTS_SUCCESS,
    payload: any[]
}

export interface FetchPostsFailedAction {
    type: POSTS_ACTION_TYPES.FETCH_POSTS_FAILED,
    payload: string
}

// define state type

interface PostsStateType {
    posts: any[],
    isLoading: boolean,
    error: null | boolean
}

const postsInitialState:PostsStateType = {
    posts: [],
    isLoading: false,
    error: false
}

export const postsReducer = (state:PostsStateType = postsInitialState, action:PostsAction ): PostsStateType => {
    const { type, payload } = action;

    switch(type) {
        case POSTS_ACTION_TYPES.FETCH_POSTS:
            return { posts: [], isLoading: true, error: false };
        case POSTS_ACTION_TYPES.FETCH_POSTS_SUCCESS:
            return { posts: payload, isLoading: false, error: false };
        case POSTS_ACTION_TYPES.FETCH_POSTS_FAILED:
            return { posts: [], isLoading: false, error: payload };
        default:
            return state;
    }
}



// define selectors


export const useTypesSelectorPosts:TypedUseSelectorHook<RootStateTwo> = useSelector;