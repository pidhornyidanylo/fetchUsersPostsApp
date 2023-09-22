import { Dispatch } from "redux";
import { PostsAction } from "./postsReducer";
import { POSTS_ACTION_TYPES } from "./postsReducer";

export const fetchPosts = () => {
    return async(dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({ type: POSTS_ACTION_TYPES.FETCH_POSTS });
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await response.json();
            dispatch({ type: POSTS_ACTION_TYPES.FETCH_POSTS_SUCCESS, payload: result })
        } catch (e) {
            dispatch({ type: POSTS_ACTION_TYPES.FETCH_POSTS_FAILED, payload: 'An error occured while fetching posts' })
        }
    }
}