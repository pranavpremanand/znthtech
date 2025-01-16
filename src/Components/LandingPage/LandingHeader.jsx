import React, { useState } from "react";
import { Link } from "react-router-dom";
import { companyDetails, logo, logoDark } from "../../data/constant";
import { Divide as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoClose, IoMail } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImPhone } from "react-icons/im";
import { Link as Scroll } from "react-scroll";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";

export const websiteLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About Us", path: "about" },
  { id: 3, name: "Services", path: "services" },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
            <Link className="w-7 h-7 flex hover:bg-primary transition-all duration-200 justify-center items-center rounded-full border border-white">
              <FaLinkedinIn className="fill-white" size={16} strokeWidth={1} />
            </Link>
            <Link className="w-7 h-7 flex hover:bg-primary transition-all duration-200 justify-center items-center rounded-full border border-white">
              <FaInstagram
                className="fill-white text-secondary"
                size={16}
                strokeWidth={1}
              />
            </Link>
            <Link className="w-7 h-7 flex hover:bg-primary transition-all duration-200 justify-center items-center rounded-full border border-white">
              <FaFacebookF className="fill-white" size={16} strokeWidth={1} />
            </Link>
            <Link className="w-7 h-7 flex hover:bg-primary transition-all duration-200 justify-center items-center rounded-full border border-white">
              <FaXTwitter className="fill-white" size={16} strokeWidth={1} />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4 bg-white dark:bg-secondary">
        <div className="wrapper flex items-center justify-between gap-10">
          <div className="flex items-center gap-3">
            <div
              className="dark:hidden block"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Hamburger
                color="#000000"
                size="26"
                toggled={isOpen}
                rounded
                toggle={setIsOpen}
              />
            </div>
            <div
              className="hidden dark:block"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Hamburger
                color="#ffffff"
                size="26"
                toggled={isOpen}
                rounded
                toggle={setIsOpen}
              />
            </div>
            <Scroll smooth spy to="banner">
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
            </Scroll>
          </div>
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-7">
              {websiteLinks.map((link) =>
                link.path.includes("/") ? (
                  <Link key={link.id} to={link.path} className="link">
                    {link.name}
                  </Link>
                ) : (
                  <Scroll
                    smooth
                    spy
                    offset={-90}
                    key={link.id}
                    to={link.path}
                    className="link"
                    // activeClass="font-bold text-primary"
                  >
                    {link.name}
                  </Scroll>
                )
              )}
              <Scroll
                smooth
                spy
                offset={-100}
                to="contact"
                className="primary-btn"
              >
                Contact Us
              </Scroll>
            </div>
            <ThemeToggleButton />
          </div>
          {/* <div
            className="block md:hidden justify-self-end"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Hamburger
              color="#000000"
              size="26"
              toggled={isOpen}
              rounded
              toggle={setIsOpen}
            />
          </div> */}
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="left"
        className="z-10 p-2 relative"
      >
        <div className="absolute inset-0 w-full h-full dark:bg-secondary">
          <div className="mb-6 flex items-center justify-between px-[.7rem] py-[.4rem]">
            <img
              src={logo}
              width="auto"
              height="auto"
              alt="logo"
              className="h-[2.5rem] object-contain dark:hidden block"
            />
            <img
              src={logoDark}
              width="auto"
              height="auto"
              alt="logo"
              className="h-[2.5rem] object-contain hidden dark:block"
            />
            <button onClick={() => setIsOpen(false)}>
              <IoClose size={28} />
            </button>
          </div>
          <div className="py-4 px-7 flex flex-col gap-4 dark:text-white text-black">
            {websiteLinks.map((link) =>
              link.path.includes("/") ? (
                <Link
                  key={link.id}
                  to={link.path}
                  className="text-2xl font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <Scroll
                  smooth
                  spy
                  offset={-20}
                  onClick={() => setIsOpen(false)}
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-medium"
                >
                  {link.name}
                </Scroll>
              )
            )}
            <Scroll
              smooth
              spy
              offset={-20}
              onClick={() => setIsOpen(false)}
              to="contact"
              className="text-2xl font-medium"
            >
              Contact Us
            </Scroll>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default LandingHeader;
