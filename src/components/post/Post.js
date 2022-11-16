import React, { useState } from "react";
import "./Post.css";
import Comments from "../comments/Comments";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { FaRedditSquare } from "react-icons/fa";

function Post({
  title,
  author,
  url,
  showUrl,
  ups,
  downs,
  postedAgo,
  created_utc,
  permalink,
  num_comments
}) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [votes, setVotes] = useState(ups - downs);
  const [upActive, setUpActive] = useState(false);
  const [downActive, setDownActive] = useState(false);
  const [activeVote, setActiveVote] = useState("#");

  //handle upvote (local state)
  //first part of function tracks if up is active for vote tallying purposes
  //second part of the function checks if the activeVote is equal to up and sets accordingly (for styling)
  const handleUp = () => {
    if (upActive === false) {
      setUpActive(true);
      setVotes(votes + 1);
    } else {
      setUpActive(false);
      setVotes(votes - 1);
    }

    if (activeVote === "#up") {
      setActiveVote("#");
    } else {
      setActiveVote("#up");
    }
  };

  //handle downvote (local state)
  //first part of function tracks if down is active for vote tallying purposes
  //second part of the function checks if the activeVote is equal to down and sets accordingly (for styling)
  const handleDown = () => {
    if (downActive === false) {
      setDownActive(true);
      setVotes(votes - 1);
    } else {
      setDownActive(false);
      setVotes(votes + 1);
    }

    if (activeVote === '#down') {
      setActiveVote('#')
    } else {
      setActiveVote('#down')
    }
  };

  //toggle showing comments
  const toggleComments = () => {
    setShowComments(!showComments);
    getComments();
  };

  const formattedVotes = (votes) => {
    if (votes < 1000) {
      return votes
    } else {
      return `${(votes / 1000).toFixed(1)}k`
    }
  }

  //function for fetching comments based on permalink prop
  //for some reason, have to access permalink inside the fetch, can't put it to its own endpoint
  const getComments = async () => {
    const response = await fetch(
      `https://www.reddit.com${permalink}/.json?limit=20`
    );
    // console.log(response)
    const raw = await response.json();
    const comments = raw[1].data.children;
    console.log(comments);
    setComments(comments);
  };

  return (
    <div className="Post">
      <div className="Votes">
        <button onClick={handleUp}>
          <BiUpvote className={activeVote === '#up' ? 'upVoteActive' : 'upVote'}/>
        </button>
        <p className={activeVote === '#up' ? 'votedUp' : activeVote === '#down' ? 'votedDown' : 'notVoted'}>{formattedVotes(votes)}</p>
        <button onClick={handleDown}>
          <BiDownvote className={activeVote === '#down' ? 'downVoteActive' : 'downVote'} />
        </button>
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
            {showUrl ? (
              <img src={url} alt={`${title}`} className="previewUrl" />
            ) : (
              <FaRedditSquare className="previewPlaceholder" />
            )}
          </a>
        </div>
        <div className="postFooter">
          <p id="postAuthor">{author}</p>
          <p>{postedAgo(created_utc)}</p>
          <div className="commentsWidget">
            <button className="commentsToggle" onClick={toggleComments}>
              <GoComment />
              <p>&nbsp; {num_comments}</p>
            </button>
          </div>
        </div>
        <div className="comments">
          {showComments && <Comments comments={comments} />}
        </div>
      </div>
    </div>
  );
}

export default Post;
