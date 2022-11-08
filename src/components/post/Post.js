import React, { useState } from "react";
import "./Post.css";
import Comments from "../comments/Comments";
import { BiUpvote, BiDownvote, BiCommentDetail } from "react-icons/bi";
import previewImage from "../../assets/previewPH.png";

function Post() {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  return (
    <div className="Post">
      <div className="Votes">
        <BiUpvote />
        <p>20</p>
        <BiDownvote />
      </div>
      <div className="postBody">
        <div className="postTitle">
          <p>Post Title</p>
        </div>
        <div className="postPreview">
          <img src={previewImage} />
        </div>
        <div className="postFooter">
          <p>Author</p>
          <p>4 hours ago</p>
          <div className="commentsWidget">
            <button className="commentsToggle" onClick={toggleComments}>
              <BiCommentDetail />
              <p>&nbsp; 4.2k</p>
            </button>
          </div>
        </div>
        <div className="comments">
          {showComments && <Comments />}
        </div>
      </div>
    </div>
  );
}

export default Post;
