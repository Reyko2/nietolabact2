import "../App.css";
import "../sass/vender/bootstrap.css";
import "../sass/main.css";
import { post_data } from "./data.js";

const posts = document.querySelector(".posts");

function Posts() {
  return (
    <div className="main_section">
      <div className="posts_container">
        <div className="posts">
          {post_data.map((post, i) => (
            <div key={i} className="post">
              <div className="info">
                <div className="person">
                  <img src={post[0]} alt="Profile" />
                  <a href="">{post[1]}</a>
                  <span className="circle">.</span>
                  <span>{post[2]}m</span>
                </div>
                <div className="more">
                  <img src="./images/show_more.png" alt="Show more" />
                </div>
              </div>
              <div className="image">
                <img src={post[3]} alt="Post" />
              </div>
              <div className="desc">
                <div className="icons">
                  <div className="icon_left d-flex">
                    <div className="like">
                      <img
                        className="not_loved"
                        src="./images/love.png"
                        alt="Love"
                      />
                      <img
                        className="loved"
                        src="./images/heart.png"
                        alt="Heart"
                      />
                    </div>
                    <div className="chat">
                      <button
                        type="button"
                        className="btn p-0"
                        data-bs-toggle="modal"
                        data-bs-target="#message_modal"
                      >
                        <img src="./images/bubble-chat.png" alt="Chat" />
                      </button>
                    </div>
                    <div className="send">
                      <button
                        type="button"
                        className="btn p-0"
                        data-bs-toggle="modal"
                        data-bs-target="#send_message_modal"
                      >
                        <img src="./images/send.png" alt="Send" />
                      </button>
                    </div>
                  </div>
                  <div className="save not_saved">
                    <img
                      className="hide saved"
                      src="./images/save_black.png"
                      alt="Saved"
                    />
                    <img
                      className="not_saved"
                      src="./images/save-instagram.png"
                      alt="Not Saved"
                    />
                  </div>
                </div>
                <div className="liked">
                  <a className="bold" href="">
                    {post[4]} likes
                  </a>
                </div>
                <div className="post_desc">
                  <p>
                    <a className="bold" href="">
                      {post[1]}
                    </a>{" "}
                    {post[5]}
                  </p>
                  <p>
                    <a className="gray" href="">
                      View all {post[6]} comments
                    </a>
                  </p>
                  <input type="text" placeholder="Add a comment..." />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
