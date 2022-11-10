import React, { useState } from "react";
import "./Post.css";
import Comments from "../comments/Comments";
import { BiUpvote, BiDownvote, BiCommentDetail } from "react-icons/bi";

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

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="Post">
      <div className="Votes">
        <BiUpvote />
        <p>{ups - downs}</p>
        <BiDownvote />
      </div>
      <div className="postBody">
        <div className="postTitle">
          <a href={url} target="_blank">
            <p>{title}</p>
          </a>
        </div>
        <div className="postPreview">
          <a href={url} target="_blank">
            {/*I only want to show an image if showUrl is true. showUrl is set in the Posts component*/}
            {showUrl && <img src={url} />}
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
