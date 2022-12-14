import React, { useState } from "react";
import "./Subreddits.css";
// import Subreddit from '../subreddit/Subreddit'
import { useSelector, useDispatch } from "react-redux";
import { selectSubreddits } from "./subredditsSlice";
import { updateSelectedSubreddit, setSearchTerm } from "../posts/redditSlice";
import {selectTheme} from '../posts/redditSlice';

function Subreddits() {
  //variable which tracks which subreddit div is the active one for stlying
  const [activeSubreddit, setActiveSubreddit] = useState("");

  const subreddits = useSelector(selectSubreddits);
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch();

  //this functiond does 3 things
  //1. dispatch action to store to update selected subreddot
  //2. dispatches action to set search term to ''
  //3. sets activeSubreddit local state to selected subreddit (for styling)
  //use e.target.outerText to access the subreddit title from the h2 in button
  const handleSubredditClick = (e) => {
    e.preventDefault();
    dispatch(updateSelectedSubreddit(e.target.outerText));
    dispatch(setSearchTerm(""));
    setActiveSubreddit(e.target.outerText);
  };


  return (
    
    <div className={`Subreddits-${theme}`} data-testid="Subreddits">
      <h1>Sub<span id='redditSpan'>reddit</span>s</h1>
      <div className='subredditsContainer' data-testid="subredditsContainer">
        {subreddits.map((subreddit, index) => {
          const { subredditTitle } = subreddit;
          return (
            //set className depending on if its the activeSubreddit or not.
            <div
              className={
                activeSubreddit === `r/${subredditTitle}`
                  ? `subredditActive-${theme}`
                  : `subreddit-${theme}`
              }
              key={index}
              data-testid={`r/${subredditTitle}`}
            >
              <button
                type="submit"
                onClick={handleSubredditClick}
                data-testid={`r/${subredditTitle}Button`}
                name={`r/${subredditTitle}Button`}
              >
                <h2>
                  <span id="orangeR">r/</span>
                  {subredditTitle}
                </h2>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Subreddits;
