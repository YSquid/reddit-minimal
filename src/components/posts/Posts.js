import React, { useEffect, useState, useCallback } from "react";
import "./Posts.css";
import Post from "../post/Post";
import { useDispatch } from "react-redux";
import { addPost } from "./redditSlice";

function Posts() {
  //using a local state to store posts after retrival
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  //setup local state to track what subreddit is being searched (searchedSubreddit)

  //define async function inside useEffect callback, local state set inside async callback
  //then call the function inside useEffect
  //update useEffect so that is runs again on update to searchedSubbreddit. Update endpoint based on searchSubreddit
  useEffect(() => {
    const getPosts = async () => {
      const endpoint = "https://www.reddit.com/r/pics.json";
      const response = await fetch(endpoint);
      const raw = await response.json();
      const posts = raw.data.children;
      setPosts(posts);
      // dispatch(addPost(posts[0].data));
      posts.forEach((post) => {
        dispatch(addPost(post.data))
      })
    };

    getPosts();
  }, []);

  return (
    <div className="Posts">
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
