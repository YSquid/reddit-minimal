import React, { useState } from "react";
import "./Post.css";
import Comments from "../comments/Comments";
import { BiUpvote, BiDownvote, BiCommentDetail } from "react-icons/bi";
import {FaRedditSquare} from 'react-icons/fa'

function Post({
  id,
  name,
  title,
  thumbnail,
  url,
  showUrl,
  ups,
  downs,
  postedAgo,
  created_utc
}) {
  const [showComments, setShowComments] = useState(false);
  const [votes, setVotes] = useState(ups-downs)
  const [upActive, setUpActive] = useState(false)
  const [downActive, setDownActive] = useState(false)
  
  const handleUp = () => {
    if (upActive === false) {
      setUpActive(true)
      setVotes(votes + 1)
    } else {
      setUpActive(false)
      setVotes(votes - 1)
    }
  }

  const handleDown = () => {
    if (downActive === false) {
      setDownActive(true)
      setVotes(votes - 1)
    } else {
      setDownActive(false)
      setVotes(votes + 1)
    }
  }

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="Post">
      <div className="Votes">
        <button onClick={handleUp}><BiUpvote /></button>
        <p>{votes}</p>
        <button onClick={handleDown}><BiDownvote /></button>
      </div>
      <div className="postBody">
        <div className="postTitle">
          <a href={url} target="_blank" rel="noreferrer">
            <p>{title}</p>
          </a>
        </div>
        <div className="postPreview">
          <a href={url} target="_blank" rel="noreferrer">
            {/*I only want to show an image if showUrl is true. showUrl is set in the Posts component*/}
            {showUrl ? <img src={url} alt={`${title}`} className='previewUrl' /> : <FaRedditSquare className="previewPlaceholder"/>}
          </a>
        </div>
        <div className="postFooter">
          <p>Author</p>
          <p>{postedAgo(created_utc)}</p>
          <div className="commentsWidget">
            <button className="commentsToggle" onClick={toggleComments}>
              <BiCommentDetail />
              <p>&nbsp; 4.2k</p>
            </button>
          </div>
        </div>
        <div className="comments">{showComments && <Comments />}</div>
      </div>
    </div>
  );
}

export default Post;
