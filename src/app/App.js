import "./App.css";
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";
import Subreddits from "../components/subreddits/Subreddits";

function App() {
  
  return (
    <div className="App">
        <Header />
        <Posts />
        <Subreddits />
    </div>
  );
}

export default App;
