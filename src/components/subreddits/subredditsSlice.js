import { createSlice } from "@reduxjs/toolkit";
import JSicon from '../../assets/JSthumbnail.png'
import ARicon from '../../assets/question-icon.png'
import PHicon from '../../assets/PH-icon.jpg'


const initialState = {
    subreddits: [
        {
            subreddit: 'javascript',
            icon: JSicon
        },
        {
            subreddit: 'AskReddit',
            icon: ARicon
        },
        {
            subreddit: 'ProgrammerHumor',
            icon: PHicon
        }
    ],
    isLoading: false,
    errorLoading: false
}

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: initialState,
    reducers: {
        addSubreddit: {
            reducer: (state, action) => {
                const {subreddit, icon} = action.payload
                state.subreddits.push({
                    subreddit: subreddit,
                    icon: icon
                })
            }
        }
    }
})

export const {addPost} = subredditsSlice.actions //addSubreddit action

export const selectSubreddits = (state) => state.subreddits.subreddits //select subreddits piece of subreddits state
export const selectIsLoading = (state) => state.subreddits.isLoading //select isLoading piece of subreddits state
export const selectErrorLoading = (state) => state.subreddits.errorLoading //select errorLoading piece of subreddits state

export default subredditsSlice.reducer //default export in the reducer for the slice