import React from 'react'

function Comment({author, body, created_utc, postedAgo}) {
  return (
    <div>
        <h3>{author}</h3>
        <p>{body}</p>
        <p>{postedAgo(created_utc)}</p>
    </div>
  )
}

export default Comment