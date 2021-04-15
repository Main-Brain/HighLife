import React from "react";
import { Link } from "react-router-dom";

const SubNavigation = () => {
  return (
    <div id="submenu">
      <div className="wrap">
        <ul>
          <li>
            <Link to="/">자유게시판</Link>
          </li>
          <li>
            <Link to="/school">학교게시판</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubNavigation;
