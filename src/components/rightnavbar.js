import "../App.css";
import "../sass/vender/bootstrap.css";
import "../sass/main.css";

function Follower() {
  return (
    <div className="followers_container">
      <div>
        <div className="cart">
          <div>
            <div className="img">
              <img src="./images/profile_img.jpg" alt="" />
            </div>
            <div className="info">
              <p className="name">riconietooo</p>
              <p className="second_name">rnrn</p>
            </div>
          </div>
          <div className="switch">
            <a href="">Switch</a>
          </div>
        </div>
        <div className="suggestions">
          <div className="title">
            <h4>Suggestions for you</h4>
            <a className="dark" href="">
              See All
            </a>
          </div>
          <div className="cart">
            <div>
              <div className="img">
                <img src="./images/images5.jpg" alt="" />
              </div>
              <div className="info">
                <p className="name">troilapuz</p>
                <p className="second_name">caster</p>
              </div>
            </div>
            <div className="switch">
              <button className="follow_text" href="#">
                follow
              </button>
            </div>
          </div>
          <div className="cart">
            <div>
              <div className="img">
                <img src="./images/images4.jpg" alt="" />
              </div>
              <div className="info">
                <p className="name">filomenooo</p>
                <p className="second_name">gelo</p>
              </div>
            </div>
            <div className="switch">
              <button className="follow_text" href="#">
                follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Follower;
