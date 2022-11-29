import React from 'react'
import './Comment.css'
import {useSelector} from 'react-redux'
import {selectTheme} from '../posts/redditSlice'

function Comment({author, body, created_utc, postedAgo}) {
  const theme = useSelector(selectTheme)
  return (
    <div className={`Comment-${theme}`}>
        <h3 className='commentAuthor'>{author}</h3>
        <p className={`commentBody-${theme}`}>{body}</p>
        <p className={`commentPostedAgo-${theme}`}>{postedAgo(created_utc)}</p>
    </div>
  )
}

export default Comment