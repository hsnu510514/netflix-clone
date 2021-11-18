import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const bellArr = new Array(10).fill("");
const userArr = new Array(4).fill("");

const Nav = () => {
  const timeoutRef = useRef();
  timeoutRef.current = [];

  return (
    <div className="sticky top-0 w-full h-16 flex items-center bg-black text-white z-20">
      <div id="logo" className="p-4 text-2xl font-bold text-red-600 mr-4">
        NETFLIX
      </div>
      <div id="navtab" className="w-auto mr-auto text-white">
        <ul className="flex flex-row gap-4 align-center text-sm">
          <li className="hover:text-gray-300 transition duration-300">
            <Link to="/">首頁</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link to="/" disabled>
              節目
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link to="/" disabled>
              電影
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link to="/" disabled>
              最新熱門影片
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link to="/my-list">我的片單</Link>
          </li>
        </ul>
      </div>
      <div
        id="user-options"
        className="mr-16 h-full flex flex-col justify-center"
      >
        <ul className="h-full flex flex-row gap-4">
          <li className="flex justify-center">
            <Button icon="search">Search</Button>
          </li>
          <li className="flex flex-col justify-center">
            <Link to="/">兒童專區</Link>
          </li>
          <li className="relative flex justify-center overflow-visible group">
            <Button icon="notification">Bell</Button>

            <div className="absolute top-full right-0 max-h-96 overflow-y-scroll">
              <ul className="hidden border-t border-white divide-y divide-gray-500 divide-opacity-70 group-hover:block">
                {bellArr.map((recommend, idx) => (
                  <li
                    className="w-96 flex flex-row p-4 bg-black bg-opacity-80"
                    key={idx}
                  >
                    <div className="w-24 h-18 mr-4 bg-black"></div>
                    <div>
                      <div className="">Type</div>
                      <div className="">Title</div>
                      <div className="">Time</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="relative flex flex-col justify-center overflow-visible group">
            <div id="setting-btn" className="flex flex-row cursor-pointer">
              <Button icon="setting">Setting</Button>
              <span className="transform duration-200 group-hover:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="white"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </span>
            </div>
            <div className="hidden absolute top-full right-0 h-auto p-2 bg-black bg-opacity-80 divide-y divide-gray-500 divide-opacity-70 group-hover:block">
              <ul className="flex flex-col">
                {userArr.map((user, idx) => (
                  <li className="w-32 flex flex-row p-1" key={idx}>
                    <div
                      id="user-photo"
                      className="w-8 h-8 mr-4 bg-black"
                      // key={idx}
                    ></div>
                    <div>User {idx}</div>
                  </li>
                ))}

                <li className="p-1">管理使用者</li>
              </ul>

              <ul className="flex flex-col ">
                <li className="p-1">帳戶</li>
                <li className="p-1">說明中心</li>
                <li className="p-1">登出Netflix</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
