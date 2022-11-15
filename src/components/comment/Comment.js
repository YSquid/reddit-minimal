import React from 'react'
import './Comment.css'

function Comment({author, body, created_utc, postedAgo}) {
  return (
    <div class='Comment'>
        <h3 className='commentAuthor'>{author}</h3>
        <p className='commentBody'>{body}</p>
        <p className='commentPostedAgo'>{postedAgo(created_utc)}</p>
    </div>
  )
}

export default Comment