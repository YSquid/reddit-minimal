import "./App.css";
import React, {useEffect, useState} from 'react'
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";
import Subreddits from "../components/subreddits/Subreddits";
import getPosts from "../api/fetchPosts";

function App() {

  useEffect(() => {
    getPosts()
  }, [])
  
  return (
    <div className="App">
        <Header />
        <Posts />
        <Subreddits />
    </div>
  );
}

export default App;
