import React from "react";
import { Link } from "react-router-dom";

const Hero1 = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-cover bg-[url('https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] overflow-hidden">
      <div className="px-5 pb-20 pt-10 sm:pt-20 lg:pt-40 w-full flex flex-col lg:flex-row">
        <div className="w-full h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center items-center text-black ">
          <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h1 className="py-10 text-3xl font-base sm:text-5xl  tracking-wide leading-tight">
              Marriages are <br /> made in heaven, <br />
              but celebrated on earth... <br />
              with love ❤️
            </h1>
            <div className="mt-5 flex flex-col sm:flex-row items-center">
              <Link
                to="/register"
                className="m-1.5 py-2.5 px-5 rounded-md bg-[#e91d63] text-white font-semibold uppercase hover:scale-110  "
              >
                Start your journey
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-xl lg:h-full lg:w-1/2 flex justify-center items-center">
          <form
            className="w-full md:w-1/2 mt-8 space-y-6 bg-white px-10 py-5 rounded-3xl"
            action="#"
            method="POST"
          >
            <div>
              <h1 className="font-bold text-2xl">Create profile</h1>
            </div>

            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-[#e91d63] text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-[#e91d63]
                  focus:border-[#e91d63] focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-[#e91d63] text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-[#e91d63]
                  focus:border-[#e91d63] focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="phonenumber" className="sr-only">
                  Password
                </label>
                <input
                  id="phonenumber"
                  name="phonenumber"
                  type="text"
                  autoComplete="phonenumber"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-[#e91d63] text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-[#e91d63]
                  focus:border-[#e91d63] focus:z-10 sm:text-sm"
                  placeholder="phonenumber"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-[#e91d63] text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-[#e91d63]
                  focus:border-[#e91d63] focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-[#e91d63] hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-[#e91d63]"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
