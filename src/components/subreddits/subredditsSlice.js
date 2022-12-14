import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  subreddits: [
    {subredditTitle: 'pics'},
    { subredditTitle: "javascript" },
    { subredditTitle: "ProgrammerHumor" },
    { subredditTitle: "reactjs" },
    { subredditTitle: "AskReddit" },
    { subredditTitle: "gaming" },
    { subredditTitle: "aww" },
    { subredditTitle: "Music" },
    { subredditTitle: "science" },
    { subredditTitle: "worldnews" },
    { subredditTitle: "movies" },
  ],
  isLoading: false,
  errorLoading: false,
};

export const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: initialState,
  reducers: {
    addSubreddit: {
      reducer: (state, action) => {
        const { subreddit } = action.payload;
        state.subreddits.push({
          subreddit: subreddit,
        });
      },
    },
  },
});

export const { addPost } = subredditsSlice.actions; //addSubreddit action

export const selectSubreddits = (state) => state.subreddits.subreddits; //select subreddits piece of subreddits state
export const selectIsLoading = (state) => state.subreddits.isLoading; //select isLoading piece of subreddits state
export const selectErrorLoading = (state) => state.subreddits.errorLoading; //select errorLoading piece of subreddits state

export default subredditsSlice.reducer; //default export in the reducer for the slice
