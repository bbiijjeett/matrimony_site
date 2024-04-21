import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const linkClass =
    "text-black hover:text-[#e91d63] font-semibold text-base px-2 py-1 ";

  return (
    <>
      <nav className="w-full  bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex flex-row w-full items-center justify-between">
              <div className="flex items-center">
                <img src={logo} alt="logo" className="h-14 w-14" />
                <p className="ml-5 text-xl md:text-2xl font-bold text-[#e91d63]">
                  ShadiManch
                </p>
              </div>
              <div className="hidden md:block">
                <div className="flex ml-10 items-center  space-x-2 ">
                  <Link to="/#" className={linkClass}>
                    Home
                  </Link>
                  <Link to="#" className={linkClass}>
                    Service
                  </Link>
                  <Link to="#" className={linkClass}>
                    Contact
                  </Link>
                  <Link to="/login" className={linkClass}>
                    Login
                  </Link>
                </div>
              </div>
              <div className="flex items-end">
                <Link
                  to={"/register"}
                  className="bg-white hover:bg-[#e91d63] hover:text-white border-[1px] border-[#e91d63] px-3 md:px-5 py-2 rounded-full text-[#e91d63] font-semibold cursor-pointer"
                >
                  Join now
                </Link>
              </div>
            </div>
            <div className="ml-5 md:hidden">
              <button
                type="button"
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              >
                <MenuIcon sx={{ color: "#e91d63" }} />
              </button>
            </div>
          </div>
        </div>
        {toggleMenu && (
          <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2">
            <Link to="/" className={linkClass}>
              Home
            </Link>
            <Link to="#" className={linkClass}>
              Service
            </Link>
            <Link to="#" className={linkClass}>
              Contact
            </Link>
            <Link to="/login" className={linkClass}>
              Login
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
