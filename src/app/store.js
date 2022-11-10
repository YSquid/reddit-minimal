import { configureStore } from "@reduxjs/toolkit";
import redditReducer from '../components/posts/redditSlice'
import subredditsReducer from '../components/subreddits/subredditsSlice'

export default configureStore({
    reducer:{
        reddit: redditReducer,
        subreddits: subredditsReducer
    }
});