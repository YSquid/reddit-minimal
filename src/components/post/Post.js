import React from "react";
import "./Post.css";
import { BiUpvote, BiDownvote, BiCommentDetail } from "react-icons/bi";
import previewImage from "../../assets/previewPH.png";

function Post() {
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
          <BiCommentDetail />
          <p>4.2k</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Post;
