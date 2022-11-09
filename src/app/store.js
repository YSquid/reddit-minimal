import { configureStore } from "@reduxjs/toolkit";
import redditReducer from '../components/posts/redditSlice'

export default configureStore({
    reducer:{
        reddit: redditReducer,
        // subreddits: subredditsReducer
    }
});