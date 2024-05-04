import React from "react";
import "./style/main.css";
import { AiFillApple } from "react-icons/ai";
import Footer from "./components/Footer";

const Acasa = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="container_left">
            <p>JOIN</p>
            <p>THE</p>
            <p>CLUB!</p>
          </div>
          <div className="container_middle">
            <img src="./img/Gun.png" alt="guitar" className="zoom" />
            <div className="overlay">
              <div className="content">Welcome!</div>
            </div>
          </div>
          <div className="container_right">
            <p>DOWNLOAD</p>
            <p>THE</p>
            <p>APP!</p>
            <a href="https://apple.com/" target="_blank">
              <button className="btn_apple">
                <AiFillApple />
                App Store
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Acasa;
