import React, { useContext } from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { Link } from "react-router-dom";
import { AddContext } from "../../context/AddContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const Navbar = () => {
  const educatorData = dummyEducatorData;
  const { user } = useContext(AddContext);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 lg:w-32" />
      </Link>
      <div className="flex items-center gap-5 text-gray-500 relative">
        <p>Hi! {user ? user.displayName || user.email : "Developerz"}</p>
        {user ? (
          <button
            onClick={handleLogout}
            className="px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <img className="max-w-8" src={assets.profile_img} alt="Profile" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
