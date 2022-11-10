import React from "react";
import "./Subreddit.css";
import { FaRedditSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {updateSelectedSubreddit} from '../posts/redditSlice'

function Subreddit({ subredditTitle, icon }) {
  const dispatch = useDispatch();
  const handleSubredditClick = (e) => {
    e.preventDefault();
    dispatch(updateSelectedSubreddit(subredditTitle))
  };
  return (
    <div className="subredditButton">
      <button type='submit' onClick={handleSubredditClick}>
        <img src={icon} />
        <h2>{subredditTitle}</h2>
      </button>
    </div>
  );
}

export default Subreddit;
