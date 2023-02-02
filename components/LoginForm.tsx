import { useState } from "react";
import LoginLock from "./svg/LoginLock";

/* eslint-disable react/no-unescaped-entities */
const LoginForm = () => {
  const [loginShow, setLoginShow] = useState(true);
  return (
    <div>
      {/* --------- auth form -------- */}
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:px-12">
          <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div className="cursor-pointer flex items-center">
              icon
              <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
                DSA- DS
              </div>
            </div>
          </div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2
              className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
            >
              {loginShow ? "Log in" : "Sign up"}
            </h2>
            <div className="mt-12">
              <form>
                {/* //! ----- name --------- */}
                {!loginShow && (
                  <div >
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Your Name
                    </div>
                    <input
                      className="w-full text-lg py-2 focus:outline-none focus:border-indigo-500 border-none shadow-lg rounded-lg bg-[#f3f3f3] mt-2 placeholder:text-[#afafaf]"
                      type="text"
                      placeholder="John Doe"
                    />
                  </div>
                )}
                {/* //! ----- email --------- */}
                <div className="mt-8">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <input
                    className="w-full text-lg py-2 border-none focus:outline-none focus:border-indigo-500 shadow-lg rounded-lg bg-[#f3f3f3] mt-2 placeholder:text-[#afafaf]"
                    type="email"
                    placeholder="mike@gmail.com"
                  />
                </div>
                {/* //! ----- password --------- */}
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                    {/* --- forgot password --- */}
                    {/* <div>
                      <a
                        className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                      >
                        Forgot Password?
                      </a>
                    </div> */}
                  </div>
                  <input
                    className="w-full text-lg py-2 border-none focus:outline-none focus:border-indigo-500 shadow-lg rounded-lg bg-[#f3f3f3] mt-2 placeholder:text-[#afafaf]"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mt-10">
                  <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
                    {loginShow ? "Log In" : "Sign up"}
                  </button>
                </div>
              </form>
              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                {loginShow ? "Have an Account ? " :"Don't have an account ? "}
                <button onClick={()=>setLoginShow(!loginShow)} className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                  {loginShow ? "Sign up" : "Log in"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --------- Side Image -------- */}
        <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
          <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
            <LoginLock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
