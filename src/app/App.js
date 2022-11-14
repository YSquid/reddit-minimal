import "./App.css";
import React from "react";
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";
import Subreddits from "../components/subreddits/Subreddits";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Body">
        <Posts />
        <Subreddits />
      </div>
    </div>
  );
}

export default App;
