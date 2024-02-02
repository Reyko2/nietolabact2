import "./App.css";
import Follower from "./components/rightnavbar";
import Posts from "./components/posts";
import SideNavbar from "./components/sidenavbar";
import Story from "./components/story";

function App() {
  return (
    <div className="post_page">
      <SideNavbar />
      <div className="second_container">
        <div className="main_section">
          <div className="posts_container">
            <Story />
            <Posts />
          </div>
        </div>
        <Follower />
      </div>
    </div>
  );
}

export default App;
