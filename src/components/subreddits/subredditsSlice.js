import { createSlice } from "@reduxjs/toolkit";
import JSthumbnail from '../../assets/JSthumbnail'
import {AiOutlineQuestionCircle} from 'react-icons/ai'

//maybe initial state for subreddits array should be empty and I hard code what to load in my useEffect?
const initialState = {
    subreddits: [
        {
            subreddit: 'javascript',
            icon: JSthumbnail
        },
        {
            subreddit: 'AskReddit',
            icon: AiOutlineQuestionCircle
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