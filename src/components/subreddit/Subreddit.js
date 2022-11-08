import React from 'react'
import './Subreddit.css'
import{FaRedditSquare} from 'react-icons/fa'

function Subreddit() {
    const handleSubredditClick = (e) => {
        e.preventDefault()
        alert('You clicked a subreddit')
    }
  return (
    <div className='subredditButton'>
        <button onClick={handleSubredditClick}><FaRedditSquare/><h2>Subreddit Name</h2></button>
    </div>
  )
}

export default Subreddit