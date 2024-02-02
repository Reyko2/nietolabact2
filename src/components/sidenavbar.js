import "../App.css";
import "../sass/vender/bootstrap.css";
import "../sass/main.css";

function SideNavbar() {
  return (
    <div className="nav_menu">
      <div className="fix_top">
        <div className="nav">
          <div className="logo">
            <a href="">
              <img
                className="d-block d-lg-none small-logo"
                src="./images/instagram.png"
                alt="logo"
              />
              <img
                className="d-none d-lg-block"
                src="./images/logo_menu.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a className="active" href="">
                  <img src="./images/accueil.png" alt="Home" />
                  <span className="d-none d-lg-block">Home</span>
                </a>
              </li>
              <li id="search_icon">
                <a href="#">
                  <img src="./images/search.png" alt="Search" />
                  <span className="d-none d-lg-block search">Search</span>
                </a>
              </li>
              {/* Repeat the following structure for other menu items */}
              <li>
                <a href="">
                  <img src="./images/compass.png" alt="Explore" />
                  <span className="d-none d-lg-block">Explore</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./images/video.png" alt="Reels" />
                  <span className="d-none d-lg-block">Reels</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./images/send.png" alt="Messages" />
                  <span className="d-none d-lg-block">Messages</span>
                </a>
              </li>
              <li className="notification_icon">
                <a href="#">
                  <img src="./images/love.png" alt="Notifications" />
                  <span className="d-none d-lg-block">Notifications</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#create_modal"
                >
                  <img src="./images/tab.png" alt="Create" />
                  <span className="d-none d-lg-block">Create</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="circle story"
                    src="./images/profile_img.jpg"
                    alt="Profile"
                  />
                  <span className="d-none d-lg-block">Profile</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="more">
            <div className="btn-group dropup">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="./images/menu.png" alt="More" />
                <span className="d-none d-lg-block">More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
