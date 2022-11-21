import React from "react";
import "./Comments.css";
import Comment from "../comment/Comment";
import postedAgo from '../utils/postedAgo'

function Comments({ comments }) {
  return (
    <div className="Comments">
      {comments.map((comment, index) => {
        if (comment.kind === "t1") {
          return (
            <Comment
              key={index}
              author={comment.data.author}
              body={comment.data.body}
              created_utc={comment.data.created_utc}
              postedAgo={postedAgo}
            />
          );
        }
      })}
    </div>
  );
}

export default Comments;
