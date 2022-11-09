import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isLoading: false,
    errorLoading: false,
    searchTerm: "",
    selectedSubreddit: "",
};

export const redditSlice = createSlice({
    name: 'reddit',
    initialState: initialState,
    reducers: {
        addPost: {
            reducer: (state, action) => {
                const {id, name, thumbnail, url,} = action.payload;
                state.posts[id] = {
                    id: id,
                    name: name,
                    thumbnail: thumbnail,
                    url: url
                }
            }
        }
    }
})

export const {addPost} = redditSlice.actions;
export const selectPosts = (state) => state.reddit.posts
export const selectIsLoading = (state) => state.reddit.isLoading
export const selectErrorLoading = (state) => state.reddit.errorLoading
export const selectSearchTerm = (state) => state.reddit.searchTerm
export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit