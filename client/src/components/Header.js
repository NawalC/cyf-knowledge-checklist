import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

export default function Header({ editLearningObjectives, logout, back }) {
  // export default function Header({ editLoImg, back }) {
  return (
    <div className="header">
      <img
        src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
        alt="code your future"
        className="header-img"
      ></img>

      <h3>{editLearningObjectives}</h3>

      <a href="/MentorsView">
        <h3 className="signup-link">{back}</h3>
      </a>
      {/* <a href="/mentorsedit">{editLoImg}</a> */}
      {logout}
      {/* <a href="/">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/159/159707.svg"
          alt="logout"
          className="logout-img"
        ></img>
      </a> */}
    </div>
  );
}
