import React, { useEffect, useState, useCallback } from "react";
import "./Posts.css";
import Post from "../post/Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const endpoint = "https://www.reddit.com/r/pics.json";
      const response = await fetch(endpoint);
      const raw = await response.json();
      const posts = raw.data.children;
      setPosts(posts)
    };
    
    getPosts()
  }, []);

  const getPosts = async () => {
    const endpoint = "https://www.reddit.com/r/pics.json";
    const response = await fetch(endpoint);
    const raw = await response.json();
    const posts = raw.data.children;
    return posts;
  };

  return (
    <div className="Posts">
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
