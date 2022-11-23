import React, { useEffect } from "react";
import "./Posts.css";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";
import postedAgo from '../utils/postedAgo'
import {
  addPost,
  selectPosts,
  clearPosts,
  selectSelectedSubreddit,
  selectSearchTerm,
  selectFilteredPosts
} from "./redditSlice";

function Posts() {
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const searchTerm = useSelector(selectSearchTerm);
  const filteredPosts = useSelector(selectFilteredPosts);
  const allPosts = useSelector(selectPosts);

  //define async function inside useEffect callback
  //then call the function inside useEffect
  //update useEffect so that is runs again on update to selectedSubreddit. Update endpoint based on selectedSubreddit
  //use similar logic for getting posts that match search
  useEffect(() => {
    const getPosts = async () => {
      const endpoint = `https://www.reddit.com/${selectedSubreddit}.json`;
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

  //choose which slice of state I want to render
  //If searchTerm is anything besides '' (i.e. truthy), render the filteredPosts. 
  //If it is '' (i.e. falsy) render allPosts
  const posts = searchTerm ? filteredPosts : allPosts

  return (
    <div className="Posts">
      {posts.map((post, index) => {
        const { id, name, title, thumbnail, author, url, ups, downs, created_utc, permalink, num_comments } =
          post;

        //if the url for the post includes gallery, we won't show the url as preview image (more logic needed as I expand outside /r/pics)
        const showUrl = url.indexOf('.png') !== -1 ? true : url.indexOf('.jpg') !== -1 ? true : false;

        return (
          <Post
            key={index}
            id={id}
            name={name}
            title={title}
            author={author}
            thumbnail={thumbnail}
            url={url}
            showUrl={showUrl}
            ups={ups}
            downs={downs}
            postedAgo={postedAgo}
            created_utc={created_utc}
            permalink={permalink}
            num_comments={num_comments}
          />
        );
      })}
    </div>
  );
}

export default Posts;
