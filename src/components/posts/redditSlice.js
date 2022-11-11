import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  filteredPosts: [],
  isLoading: false,
  errorLoading: false,
  searchTerm: "",
  selectedSubreddit: "pics",
};

export const redditSlice = createSlice({
  name: "reddit",
  initialState: initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        const { id, name, title, thumbnail, url, ups, downs, created_utc } =
          action.payload;
        //how can I udate this so that I don't just push new state every time, but replace state on each dispatch
        state.posts.push({
          id: id,
          name: name,
          title: title,
          thumbnail: thumbnail,
          url: url,
          ups: ups,
          downs: downs,
          created_utc: created_utc,
        });
      },
    },
    //used to clear the posts to an empty state for when I choose a new subreddit and load posts from it into state
    //maybe I can use this somehow in next page kinda s
    clearPosts: {
      reducer: (state) => {
        state.posts = [];
      },
    },
    filterPosts: {
      reducer: (state, action) => {
        const filteredPosts = state.posts.filter((post) =>{
          return post.title.includes(action.payload)
        })
        state.filteredPosts = filteredPosts
      }
    },
    setSearchTerm: {
      reducer: (state, action) => {
        state.searchTerm = action.payload;
      },
    },
    updateSelectedSubreddit: {
      reducer: (state, action) => {
        state.selectedSubreddit = action.payload;
      },
    },
  },
});

export const { addPost, clearPosts, setSearchTerm, filterPosts, updateSelectedSubreddit } =
  redditSlice.actions; //addPost action

//selectors for each prop in redditSlice
export const selectPosts = (state) => state.reddit.posts;
export const selectFilteredPosts = (state) => state.reddit.filteredPosts
export const selectIsLoading = (state) => state.reddit.isLoading;
export const selectErrorLoading = (state) => state.reddit.errorLoading;
export const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectSelectedSubreddit = (state) =>
  state.reddit.selectedSubreddit;

export default redditSlice.reducer; //default export is the reducer for the slice
