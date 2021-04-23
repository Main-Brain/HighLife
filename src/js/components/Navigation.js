import React from "react";
import { NavLink } from "react-router-dom";
import SubNavigation from "./SubNavigation";

const Navigation = () => {
  return (
    <header>
      <nav>
        <div className="wrap">
          <div id="account">
            <NavLink to="/login" className="button">로그인</NavLink>
            <NavLink to="/register" className="button blue">회원가입</NavLink>
          </div>

          <ul id="menu">
            <li>
              <NavLink to="/" activeClassName="active">게시판</NavLink>
            </li>
            <li>
              <NavLink to="/timetable" activeClassName="active">시간표</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      { location.pathname === '/' && <SubNavigation /> }
    </header>
  );
};

export default Navigation;
