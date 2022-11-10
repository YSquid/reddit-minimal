import React, { useEffect, useState, useCallback } from "react";
import "./Posts.css";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";
import { addPost, selectPosts, clearPosts, selectSelectedSubreddit } from "./redditSlice";

function Posts() {
  const dispatch = useDispatch();
  let selectedSubreddit = useSelector(selectSelectedSubreddit);
  //define async function inside useEffect callback
  //then call the function inside useEffect
  //update useEffect so that is runs again on update to searchedSubbreddit. Update endpoint based on searchSubreddit
  useEffect(() => {
    const getPosts = async () => {
      const endpoint = `https://www.reddit.com/r/${selectedSubreddit}.json`;
      const response = await fetch(endpoint);
      const raw = await response.json();
      const postsFull = raw.data.children;
      console.log(postsFull);
      dispatch(clearPosts())
      postsFull.forEach((post) => {
        dispatch(addPost(post.data));
      });
    };

    getPosts();
  }, [selectedSubreddit]);

  //give component access to the reddit.posts slice of state
  const posts = useSelector(selectPosts);

  return (
    <div className="Posts">
      {posts.map((post, index) => {
        const { id, name, title, thumbnail, url, ups, downs, created_utc } =
          post;

        //if the url for the post includes gallery, we won't show the url as preview image (more logic needed as I expand outside /r/pics)
        const showUrl = url.indexOf("gallery") === -1 ? true : false;

        //find time since posts seconds
        //convert seconds into either days, weeks, months, years depending on number of seconds
        const postedAgo = (created_utc) => {

          //note Date.now() is ms since 1/1/1970, and utc is seconds since. So convert UTC to ms
          /*
          1 day = 24 hours
          1 week = 168 hours
          1 month = 744 hours (assuming 31 day months to acocunt for longest possible)
          1 year = 8760 hours
          */

          const secondsElapsed = Date.now() - created_utc * 1000;
          const hoursRaw = secondsElapsed / 3600000;
          const hoursElapsed = Math.floor(hoursRaw);
          const daysElapsed = hoursElapsed / 24;
          const weeksElapsed = hoursElapsed / 168;
          const monthsElapsed = hoursElapsed / 744;
          const yearsElapsed = hoursElapsed / 8760;
          if (hoursElapsed < 24) {
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
          <Post
            key={index}
            id={id}
            name={name}
            title={title}
            thumbnail={thumbnail}
            url={url}
            showUrl={showUrl}
            ups={ups}
            downs={downs}
            postedAgo={postedAgo}
            created_utc={created_utc}
          />
        );
      })}
    </div>
  );
}

export default Posts;
