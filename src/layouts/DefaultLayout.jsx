import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar({ children }) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 mx-auto flex w-full items-center justify-between bg-gray-950 px-4 py-2 text-white">
      {children}
    </nav>
  );
}

function NavItem({ to, children }) {
  return (
    <Link to={to} className="left-0 right-0 top-0 mx-2 text-white no-underline hover:underline">
      {children}
    </Link>
  );
}

export default function DefaultLayout() {
  return (
    <>
       <NavBar>
        <NavItem to="/">
          <img className="size-14" src="img/12logo.png" alt="logo_image" />
        </NavItem>
        <div className="align-center flex">
          <span className="mx-2 flex items-center text-white">
            호로롤
            {/* {nickname ? `${nickname}님 반갑습니다` : 'Loading...'} */}
          </span>
          <Link to="/survey" className="mr-3">
            💡 맞춤 추천
          </Link>
          <NavItem to="/mypage">마이페이지</NavItem>
          <button
            className="mx-3 rounded-md border bg-gray-100 px-3 text-black no-underline hover:underline"
          >
            로그아웃
          </button>
        </div>
      </NavBar>

      <Outlet />
    </>
  );
}
