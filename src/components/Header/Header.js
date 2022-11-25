import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="w-full z-10 border-b-2  h-16 fixed top-0 left-0 bg-amber-500 justify-center flex items-center gap-10 text-xl  font-semibold">
        <NavLink className="py-2 px-4   " to={"/home"}>
          Home
        </NavLink>
        <NavLink className="py-2 px-4  " to={"/reviews"}>
          Reviews
        </NavLink>
        <NavLink className="py-2 px-4 " to={"/dashboard"}>
          Dashboard
        </NavLink>
        <NavLink className="py-2 px-4  " to={"/blogs"}>
          Blogs
        </NavLink>
        <NavLink className="py-2 px-4  " to={"/about"}>
          About
        </NavLink>
      </nav>
    </div>
  );
};
export default Header;
