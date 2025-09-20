// src/components/common/Navbar.jsx
import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { AddContext } from "../../context/AddContext";

const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");

  const { navigate, isEducator, user, loginWithGoogle, logout } =
    useContext(AddContext);

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button
                className="cursor-pointer"
                onClick={() => navigate("/educator")}
              >
                {isEducator ? "Educator Dashboard" : "Become An Educator"}
              </button>
              | <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>

        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <button
              onClick={logout}
              className="bg-red-500 text-white px-5 py-2 rounded-full"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={loginWithGoogle}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Sign In with Google
          </button>
        )}
      </div>

      {/* Mobile menu */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button onClick={() => navigate("/educator")}>
                {isEducator ? "Educator Dashboard" : "Become An Educator"}
              </button>
              | <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}

          {user ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={logout}
            />
          ) : (
            <button onClick={loginWithGoogle}>
              <img src={assets.user_icon} alt="User Icon" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
