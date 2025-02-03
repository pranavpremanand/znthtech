import React from "react";
import { companyDetails, logo, logoDark } from "../data/constant";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import ThemeToggleButton from "../Components/ThemeToggleButton/ThemeToggleButton";

const Thankyou = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-between">
      <div className="fixed top-0 left-0 w-full max-w-[100vw] z-[999]">
        <div className="py-3 hidden sm:flex bg-secondary text-white">
          <div className="wrapper w-full flex items-center justify-between gap-4 md:gap-10">
            <div className="flex flex-row items-center gap-7">
              <div className="flex items-center gap-1">
                <IoMail size={22} className="fill-white text-secondary" />
                <Link to={`mailto:${companyDetails.email}`}>
                  {companyDetails.email}
                </Link>
              </div>
              <div className="flex items-center gap-1">
                <ImPhone size={18} className="fill-white text-secondary mb-1" />
                <Link to={`tel:${companyDetails.phone}`}>
                  {companyDetails.phone}
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to={companyDetails.linkedin}
                target="_blank"
                className="w-7 h-7 flex hover:bg-primary transition-all duration-200 justify-center items-center rounded-full border border-white"
              >
                <FaLinkedinIn
                  className="fill-white"
                  size={16}
                  strokeWidth={1}
                />
              </Link>
              <Link
                to={companyDetails.instagram}
                target="_blank"
                className="w-7 h-7 flex hover:bg-primary transition-all duration-200 justify-center items-center rounded-full border border-white"
              >
                <FaInstagram
                  className="fill-white text-secondary"
                  size={16}
                  strokeWidth={1}
                />
              </Link>
              <Link
                to={companyDetails.facebook}
                target="_blank"
                className="w-7 h-7 flex hover:bg-primary transition-all duration-200 justify-center items-center rounded-full border border-white"
              >
                <FaFacebookF className="fill-white" size={16} strokeWidth={1} />
              </Link>
              <Link
                to={companyDetails.twitter}
                target="_blank"
                className="w-7 h-7 flex hover:bg-primary transition-all duration-200 justify-center items-center rounded-full border border-white"
              >
                <FaXTwitter className="fill-white" size={16} strokeWidth={1} />
              </Link>
            </div>
          </div>
        </div>
        <div className="py-4 bg-white dark:bg-secondary">
          <div className="wrapper flex items-center justify-between gap-10">
            <div className="flex items-center gap-3">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="h-[3.5rem] object-contain cursor-pointer dark:hidden block"
                />
                <img
                  src={logoDark}
                  alt="logo"
                  className="h-[3.5rem] object-contain cursor-pointer dark:block hidden"
                />
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <ThemeToggleButton />
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="wrapper flex-1 flex items-center translate-y-[1.5rem]">
        <div className="space-y-4 text-center">
          <h1 className="heading">Thank You</h1>
          <p className="text-lg">
            We have received your message and will get back to you as soon as
            possible.
          </p>

          <Link className="primary-btn w-fit mx-auto" to="/">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
