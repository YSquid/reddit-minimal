import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer:{
        reddit: redditReducer,
        subreddits: subredditsReducer
    }
})