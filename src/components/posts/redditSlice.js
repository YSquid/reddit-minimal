import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  errorLoading: false,
  searchTerm: "",
  selectedSubreddit: "",
};

export const redditSlice = createSlice({
  name: "reddit",
  initialState: initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        const { id, name, title, thumbnail, url, ups, downs } = action.payload;
        state.posts.push({ 
            id: id,
            name: name,
            title,
            thumbnail: thumbnail,
            url: url,
            ups: ups,
            downs: downs
        });
      },
    },
  },
});

export const { addPost } = redditSlice.actions;
export const selectPosts = (state) => state.reddit.posts;
export const selectIsLoading = (state) => state.reddit.isLoading;
export const selectErrorLoading = (state) => state.reddit.errorLoading;
export const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectSelectedSubreddit = (state) =>
  state.reddit.selectedSubreddit;
export default redditSlice.reducer;
