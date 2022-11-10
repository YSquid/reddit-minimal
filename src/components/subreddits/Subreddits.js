import React from 'react'
import './Subreddits.css'
import Subreddit from '../subreddit/Subreddit'
import {useSelector} from 'react-redux'
import {selectSubreddits} from './subredditsSlice'

function Subreddits() {

  const subreddits = useSelector(selectSubreddits)

  return (
    <div className='Subreddits'>
      <h1>Subreddits</h1>
      <div className='subredditsContainer'>
        {subreddits.map((subreddit, index) => {
          const {subredditTitle, icon} = subreddit
          return (
            <Subreddit
            key={index}
            title={subredditTitle}
            icon={icon} />
          )
        })}
      </div>
    </div>
  )
}

export default Subreddits