import React from "react";
import Item from "./Item";
import { COMPANY, SUPPORT } from "../data/FooterData";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <footer className="bg-[#e91d63] text-white bottom-0">
      <div className="flex  items-start gap-10 flex-row justify-between   md:justify-around px-5 py-16">
        <Item Links={COMPANY} title="COMPANY" />
        <Item Links={SUPPORT} title="SUPPORT" />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
  text-center pt-2 text-black font-semibold text-sm pb-8"
      >
        <span>© 2024 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="text-white">
          <span
            className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-black mx-1.5 text-xl hover:text-gray-100 hover:bg-[#e91d63]
        duration-300 "
          >
            <InstagramIcon />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-black mx-1.5 text-xl hover:text-gray-100 hover:bg-[#e91d63]
        duration-300 "
          >
            <FacebookIcon />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-black mx-1.5 text-xl hover:text-gray-100 hover:bg-[#e91d63]
        duration-300 "
          >
            <XIcon />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
