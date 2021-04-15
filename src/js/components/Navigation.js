import React from "react";
import { Link } from "react-router-dom";
import SubNavigation from "./SubNavigation";

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="wrap">
          <div id="account">
            <Link to="/login" className="button">로그인</Link>
            <Link to="/register" className="button blue">회원가입</Link>
          </div>

          <ul id="menu">
            <li>
              <Link to="/">게시판</Link>
            </li>
            <li>
              <Link to="/timetable">시간표</Link>
            </li>
          </ul>
        </div>
      </nav>
      { location.pathname === '/' && <SubNavigation /> }
    </div>
  );
};

export default Navigation;
