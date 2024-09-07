import React from "react";
//import Typical from 'react-typical';
import { useState, useEffect } from "react";
import "./Profile.css";

export default function Profile() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Full Stack Developer ",
    "Web Developer",
    "Web Designer",
    "UI/UX Designer",
    "Mobile Application Developer",
    "React/React Native Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/kesara.kekulawala.1?mibextid=ZbWKwL">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/kesaraa_/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/KesaraKekulawala">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/kesara-kekulawala-392077230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text">Kesara Kekulawala, </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {/* {" "}
                        <Typical 
                        loop={Infinity}
                        steps={[
                            "Full Stack Developer ",
                            3000,
                            "Web Developer",
                            3000,
                            "Web Designer",
                            3000,
                            "UI/UX Designer",
                            3000,
                            "Mobile Application Developer",
                            3000,
                            "React/React Native Developer",
                            3000,
                        ]} 
                        />*/}
                {text}
              </h1>
              <span className="profile-role-tagline">
                Knack of building application with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
