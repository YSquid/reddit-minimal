import React from 'react'
import './Subreddits.css'
import Subreddit from '../subreddit/Subreddit'

function Subreddits() {
  return (
    <div className='Subreddits'>
      <h1>Subreddits</h1>
      <div className='subredditsContainer'>
        <Subreddit/>
        <Subreddit/>
        <Subreddit/>
      </div>
    </div>
  )
}

export default Subreddits