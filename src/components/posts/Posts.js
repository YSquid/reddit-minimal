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
      console.log(postsFull)
      postsFull.forEach((post) => {
        dispatch(addPost(post.data));
      });
    };

    getPosts();
  }, []);
  const posts = useSelector(selectPosts);
  console.log(posts);
  return (
    <div className="Posts">
      {posts.map((post, index) => {
        const {id, name, title, thumbnail, url} = post
        return (
        <Post 
        key={index}
        id={id}
        name={name}
        title={title}
        thumbnail={thumbnail}
        url={url}
         />
        );
      })}
    </div>
  );
}

export default Posts;
