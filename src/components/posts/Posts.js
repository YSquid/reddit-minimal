import React, { useEffect, useState } from "react";
import "./Posts.css";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  selectPosts,
  clearPosts,
  selectSelectedSubreddit,
} from "./redditSlice";

function Posts() {
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  //define async function inside useEffect callback
  //then call the function inside useEffect
  //update useEffect so that is runs again on update to selectedSubreddit. Update endpoint based on selectedSubreddit
  //use similar logic for getting posts that match search
  useEffect(() => {
    const getPosts = async () => {
      const endpoint = `https://www.reddit.com/r/${selectedSubreddit}.json`;
      const response = await fetch(endpoint);
      const raw = await response.json();
      const postsFull = raw.data.children;
      //clear the posts so its an empty array to push new posts to on updates to selected subreddit
      dispatch(clearPosts());
      postsFull.forEach((post) => {
        dispatch(addPost(post.data));
      });
    };

    getPosts();
  }, [selectedSubreddit, dispatch]);

  //give component access to the reddit.posts slice of state
  const posts = useSelector(selectPosts);

  return (
    <div className="Posts">
      {posts.map((post, index) => {
        const { id, name, title, thumbnail, url, ups, downs, created_utc } =
          post;

        //if the url for the post includes gallery, we won't show the url as preview image (more logic needed as I expand outside /r/pics)
        const showUrl = url.indexOf('.png') !== -1 ? true : url.indexOf('.jpg') !== -1 ? true : false;

       
        //find time since posts seconds
        //convert seconds into either days, weeks, months, years depending on number of seconds
        //note Date.now() is ms since 1/1/1970, and utc is seconds since. So convert UTC to ms
          /*
          1 day = 24 hours
          1 week = 168 hours
          1 month = 744 hours (assuming 31 day months to acocunt for longest possible)
          1 year = 8760 hours
          */

        const postedAgo = (created_utc) => {
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
