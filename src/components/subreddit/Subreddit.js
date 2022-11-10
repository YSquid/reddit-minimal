import React from 'react'
import './Subreddit.css'
import{FaRedditSquare} from 'react-icons/fa'

function Subreddit({title, icon}) {
    const handleSubredditClick = (e) => {
        e.preventDefault()
        alert('You clicked a subreddit')
    }
  return (
    <div className='subredditButton'>
        <button onClick={handleSubredditClick}><img src={icon}/><h2>{title}</h2></button>
    </div>
  )
}

export default Subreddit