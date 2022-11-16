import React, {useState} from 'react'
import './Subreddits.css'
// import Subreddit from '../subreddit/Subreddit'
import {useSelector, useDispatch} from 'react-redux'
import {selectSubreddits} from './subredditsSlice'
import {updateSelectedSubreddit, setSearchTerm} from '../posts/redditSlice'


function Subreddits() {

  const [activeSubreddit, setActiveSubreddit] = useState('')

  const subreddits = useSelector(selectSubreddits)

  const dispatch = useDispatch();
  const handleSubredditClick = (e) => {
    e.preventDefault();
    console.log(e)
    dispatch(updateSelectedSubreddit(e.target.outerText))
    dispatch(setSearchTerm(''))
    setActiveSubreddit(e.target.outerText)
  };

  return (
    <div className='Subreddits'>
      <h1>Sub<span id='redditSpan'>reddit</span>s</h1>
      <div className='subredditsContainer'>
        {subreddits.map((subreddit, index) => {
          const {subredditTitle} = subreddit
          return (
            <div className={activeSubreddit === `r/${subredditTitle}` ? 'subredditActive' : 'subreddit'} key={index}>
            <button type='submit' onClick={handleSubredditClick}>
              <h2><span id="orangeR">r/</span>{subredditTitle}</h2>
            </button>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Subreddits