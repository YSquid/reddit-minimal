import React from "react";
import "./Comments.css";
import Comment from "../comment/Comment";

function Comments({ comments }) {
  const postedAgo = (created_utc) => {
    const secondsElapsed = Date.now() - created_utc * 1000;
    const hoursRaw = secondsElapsed / 3600000;
    const minutesElapsed = Math.floor(hoursRaw * 60);
    const hoursElapsed = Math.floor(hoursRaw);
    const daysElapsed = Math.floor(hoursElapsed / 24);
    const weeksElapsed = Math.floor(hoursElapsed / 168);
    const monthsElapsed = Math.floor(hoursElapsed / 744);
    const yearsElapsed = Math.floor(hoursElapsed / 8760);
    if (hoursElapsed < 1) {
      return `${minutesElapsed} minutes ago`
    } else if (hoursElapsed < 24) {
      return `${hoursElapsed} hours ago`;
    } else if (hoursElapsed < 168) {
      return `${daysElapsed} days ago`;
    } else if (hoursElapsed < 744) {
      return `${weeksElapsed} weeks ago`;
    } else if (hoursElapsed < 8760) {
      return `${monthsElapsed} months ago`;
    } else {
      return `${yearsElapsed} years ago`;
    }
  };
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
