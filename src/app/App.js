import "./App.css";
import React from "react";
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";
import Subreddits from "../components/subreddits/Subreddits";

function App() {
  return (
    <div className="App" data-testid="App">
      <div className="Header" data-testid="Header">
        <Header />
      </div>
      <div className="Body" data-testid="Body">
        <Posts />
        <Subreddits />
      </div>
    </div>
  );
}

export default App;
