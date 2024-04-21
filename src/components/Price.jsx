import React from "react";
// import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Price = () => {
  return (
    <>
      <div className="px-10 py-10 w-full flex flex-col items-center justify-center">
        <h1 className="font-extrabold text-2xl md:text-7xl">
          Plans that fit your need
        </h1>
        <h3 className="font-semibold text-center text-xl md:text-4xl mt-2">
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </h3>
        <div className="mt-5 py-10  px-5 w-full flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-20 overflow-hidden">
          <div className="w-full bg-slate-100 border-2 shadow-xl p-5 rounded-xl flex flex-col items-center">
            <h1 className="text-2xl font-semibold">Basic</h1>
            <h1 className="text-4xl font-bold mt-2">₹1,500/month</h1>
            <ul className="text-[#e91d63] text-xs md:text-base  font-medium flex flex-col items-start my-5  gap-2">
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                View contact details of interested profiles
              </li>
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                Send personalized messages to matches
              </li>
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                Access to daily matches
              </li>
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                Profile highlighting for better visibility
              </li>
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                Limited profile views per day
              </li>
            </ul>
            <button className="border-2 border-[#e91d63] w-full rounded-xl py-2 font-bold text-[#e91d63] hover:bg-[#e91d63]/10">
              Start Trail
            </button>
          </div>
          <div className="relative w-full bg-slate-100 border-2 shadow-xl px-0 md:px-5 py-12 rounded-xl flex flex-col items-center">
            <div className="absolute -top-5 text-lg font-bold text-white p-2 bg-red-500 rounded-full">
              Most popular
            </div>
            <h1 className="text-2xl font-semibold">Premium</h1>
            <h1 className="text-4xl font-bold mt-2"> ₹2,500/month</h1>
            <ul className="text-[#e91d63] text-xs md:text-base  font-medium flex flex-col items-start my-5  gap-2">
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                All features of the Basic Plan
              </li>
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                Unlimited profile views
              </li>
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                Enhanced privacy controls
              </li>
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                Priority in search results
              </li>
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                Assistance from Relationship Managers
              </li>
            </ul>
            <button className=" bg-[#e91d63] hover:bg-red-500  w-full rounded-xl py-2 font-bold text-white">
              Start Trail
            </button>
          </div>
          <div className="w-full bg-slate-100 border-2 shadow-xl p-5 rounded-xl flex flex-col items-center">
            <h1 className="text-2xl font-semibold">Diamond</h1>
            <h1 className="text-4xl font-bold mt-2">₹4,000/month</h1>
            <ul className="text-[#e91d63] text-xs md:text-base font-medium flex flex-col items-start my-5  gap-2">
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                All features of the Premium Plan
              </li>
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                Exclusive access to elite matches
              </li>
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                Verified mobile number and photo
              </li>
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                Access to premium customer support
              </li>
              <li>
                <CheckCircleIcon sx={{ color: "green", marginRight: "4px" }} />
                Profile highlighted as a premium member
              </li>
            </ul>
            <button className="border-2 border-[#e91d63] w-full rounded-xl py-2 font-bold text-[#e91d63] hover:bg-[#e91d63]/10">
              Start Trail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
