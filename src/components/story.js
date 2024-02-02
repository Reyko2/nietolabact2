import "../App.css";
import "../sass/vender/bootstrap.css";
import "../sass/main.css";
import { image_profile } from "./data.js";

function Story() {
  return (
    <div className="main_section">
      <div className="posts_container">
        <div className="stories">
          <div className="manual-carousel">
            <div className="manual-carousel-wrapper">
              {image_profile.map((profile, index) => (
                <div key={index} className="manual-carousel-item">
                  <img src={profile[0]} alt={profile[1]} />
                  <p>{profile[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
