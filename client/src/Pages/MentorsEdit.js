import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import EditBox from "../components/EditBox";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { skills, skillLabel } from "../components/consts/skillsConst";

export default function MentorsEdit() {
  let back = "Students Progress";
  let logout = (
    <a href="/">
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/159/159707.svg"
        alt="logout"
        className="logout-img"
      ></img>
    </a>
  );
  return (
    <Router>
      <Header logout={logout} back={back} />
      <div className="mentorsedit-page"></div>

      <div className="edit-display-container">
        <div className="skillNav-display ">
          <ul>
            <li>
              <NavLink
                to="/mentorsedit/html"
                activeClassName="active-skill-display"
                className="default-skill-display"
              >
                HTML
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentorsedit/css"
                activeClassName="active-skill-display"
                className="default-skill-display"
              >
                CSS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentorsedit/git"
                activeClassName="active-skill-display"
                className="default-skill-display"
              >
                Git
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentorsedit/javascript"
                activeClassName="active-skill-display"
                className="default-skill-display"
              >
                JavaScript
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentorsedit/react"
                activeClassName="active-skill-display"
                className="default-skill-display"
              >
                React.js
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentorsedit/node"
                activeClassName="active-skill-display"
                className="default-skill-display"
              >
                Node
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentorsedit/sql"
                activeClassName="active-skill-display"
                className="default-skill-display"
              >
                SQL
              </NavLink>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/mentorsedit/:id" children={<EditBox />} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
