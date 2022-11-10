import React, { useEffect, useState, useCallback } from "react";
import "./Posts.css";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";
import { addPost, selectPosts } from "./redditSlice";

function Posts() {
  const dispatch = useDispatch();

  //define async function inside useEffect callback
  //then call the function inside useEffect
  //update useEffect so that is runs again on update to searchedSubbreddit. Update endpoint based on searchSubreddit
  useEffect(() => {
    const getPosts = async () => {
      const endpoint = "https://www.reddit.com/r/pics.json";
      const response = await fetch(endpoint);
      const raw = await response.json();
      const postsFull = raw.data.children;
      console.log(postsFull);
      postsFull.forEach((post) => {
        dispatch(addPost(post.data));
      });
    };

    getPosts();
  }, []);

  //give component access to the reddit.posts slice of state
  const posts = useSelector(selectPosts);

  posts.forEach((post) => {
    console.log(post.created_utc)
  })

  return (
    <div className="Posts">
      {posts.map((post, index) => {


        const { id, name, title, thumbnail, url, ups, downs, created_utc} = post;

        //if the url for the post includes gallery, we won't show the url as preview image (more logic needed as I expand outside /r/pics)
        const showUrl = url.indexOf("gallery") === -1 ? true : false;

        //find time since posts seconds
        //convert seconds into either days, weeks, months, years depending on number of seconds
        const postedAgo = (created_utc) => {
          return Date.now() - created_utc
        }

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
