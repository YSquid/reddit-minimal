import React, { useEffect, useState } from "react";
import "./Post.css";
import Comments from "../comments/Comments";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { FaRedditSquare } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectSelectedSubreddit } from "../posts/redditSlice";
import { selectTheme } from "../posts/redditSlice";

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
  num_comments,
}) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [votes, setVotes] = useState(ups - downs);
  const [upActive, setUpActive] = useState(false);
  const [downActive, setDownActive] = useState(false);
  const [activeVote, setActiveVote] = useState("#");

  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const theme = useSelector(selectTheme);

  useEffect(() => {
    setComments([]);
  }, [selectedSubreddit]);

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

    if (activeVote === "#down") {
      setActiveVote("#");
    } else {
      setActiveVote("#down");
    }
  };

  //toggle showing comments
  const toggleComments = () => {
    setShowComments(!showComments);
    getComments();
  };

  const formattedVotes = (votes) => {
    if (votes < 1000) {
      return votes;
    } else {
      return `${(votes / 1000).toFixed(1)}k`;
    }
  };

  //function for fetching comments based on permalink prop
  //for some reason, have to access permalink inside the fetch, can't put it to its own endpoint
  const getComments = async () => {
    const response = await fetch(
      `https://www.reddit.com${permalink}/.json?limit=20`
    );
    // console.log(response)
    const raw = await response.json();
    const comments = raw[1].data.children;
    setComments(comments);
  };

  return (
    <div className={theme === "light" ? "Post" : "Post-dark"}>
      <div className="Votes">
        <button onClick={handleUp} aria-label="upvote button">
          <BiUpvote
            className={activeVote === "#up" ? `upVoteActive-${theme}` : `upVote-${theme}`}
          />
        </button>
        <p
          className={
            activeVote === "#up" && theme === 'light'
              ? "votedUp" :
              activeVote === "#up" && theme === 'dark' 
              ? "votedUp-dark": 
              activeVote === "#down" && theme === 'light' 
              ? "votedDown":  
              activeVote === "#down" && theme === 'dark' 
              ? "votedDown-dark":
              activeVote === '#' && theme === 'dark'
              ? 'notVoted-dark' :
              'notVoted'
          }
        >
          {formattedVotes(votes)}
        </p>
        <button onClick={handleDown} aria-label="downvote button">
          <BiDownvote
            className={activeVote === "#down" ? `downVoteActive-${theme}` : `downVote-${theme}`}
          />
        </button>
      </div>
      <div className={`postBody-${theme}`}>
        <div className={`postTitle-${theme}`}>
          <a href={url} target="_blank" rel="noreferrer">
            <p data-testid="postTitle_pTag">{title}</p>
          </a>
        </div>
        <div className="postPreview">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={`link to ${title}`}
          >
            {/*I only want to show an image if showUrl is true. showUrl is set in the Posts component*/}
            {showUrl ? (
              <img src={url} alt={`${title}`} className="previewUrl" />
            ) : (
              <FaRedditSquare className="previewPlaceholder" />
            )}
          </a>
        </div>
        <div className={`postFooter-${theme}`}>
          <p id="postAuthor">{author}</p>
          <p>{postedAgo(created_utc)}</p>
          <div className="commentsWidget">
            <button className={`commentsToggle-${theme}`} onClick={toggleComments}>
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
