import "../App.css";
import "../sass/vender/bootstrap.css";
import "../sass/main.css";
import React, { useState } from "react";
import { post_data } from "./data.js";

const posts = document.querySelector(".posts");

function Posts() {
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorited] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleFavorite = () => {
    setFavorited(!favorited);
  };

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
                {post[7] === "NSFW" ? (
                  <div className="image-nsfw-container">
                    <img src={post[3]} alt="Post" className="image-nsfw" />{" "}
                    {/* Displaying the image */}
                    <div className="image-text">
                      <strong>Sensitive Content</strong>
                      <br />
                      This photo contains sensitive content which people may
                      find offensive or disturbing.
                    </div>
                    {}
                  </div>
                ) : (
                  <img src={post[3]} alt="Post" />
                )}
              </div>
              <div className="desc">
                <div className="icons">
                  <div className="icon_left d-flex">
                    <div className="like" onClick={toggleLike}>
                      {liked ? (
                        <img src="./images/heart.png" alt="Heart" />
                      ) : (
                        <img src="./images/love.png" alt="Love" />
                      )}
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
                  <div className="save not_saved" onClick={toggleFavorite}>
                    {favorited ? (
                      <img src="./images/save_black.png" alt="Saved" />
                    ) : (
                      <img src="./images/save-instagram.png" alt="Not Saved" />
                    )}
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
