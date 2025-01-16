import React from "react";
import banner from "../assets/images/banners/aboutus.webp";
import PageBanner from "../Components/Website/PageBanner";
import HrLine from "../Components/HrLine";
import { Link } from "react-router-dom";
import { companyDetails } from "../data/constant";
import visionImg from "../assets/images/vision.webp";
import missionImg from "../assets/images/mission.webp";
import { ImPhone } from "react-icons/im";
import Testimonials from "../Components/Testimonials";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";

const AboutUs = () => {
  return (
    <>
      <PageBanner banner={banner} title="About Us" />
      <section className="pt-[5rem] wrapper grid md:grid-cols-2 gap-7">
        <div data-aos="fade-up" className="space-y-4">
          <p className="uppercase text-primary text-start">Our Vision</p>
          <h3 className="section-heading">
            Transforming Ideas into Digital Success.
          </h3>
          <HrLine />
          <p>
            At ZNTH Tech Pvt. Ltd., our vision is to be the global leader in
            providing innovative IT solutions that drive digital transformation
            and business growth. We aim to empower businesses worldwide by
            delivering cutting-edge technologies that unlock new opportunities,
            enhance efficiency, and create sustainable success. By fostering a
            culture of continuous innovation and excellence, we strive to be the
            go-to partner for organizations seeking to stay ahead in a rapidly
            evolving digital landscape.
          </p>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
            <Link to="/contact-us" className="primary-btn sm:w-fit w-full">
              Request A Quote
            </Link>
            <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
              <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
                <ImPhone size={25} className="text-white" />
              </div>
              <div className="flex flex-col capitalize">
                <p className="">Call to ask any question</p>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="font-semibold"
                >
                  {companyDetails.phone}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="w-full h-full">
          <img
            src={visionImg}
            className="w-full h-full object-cover object-bottom rounded-lg"
            alt="Our Vision"
          />
        </div>
      </section>
      <section className="pt-[5rem] wrapper grid md:grid-cols-2 gap-7">
        <div data-aos="fade-up" className="md:block hidden w-full h-full">
          <img
            src={missionImg}
            className="w-full h-full object-cover rounded-lg"
            alt="Our Mission"
          />
        </div>
        <div data-aos="fade-up" className="space-y-4">
          <p className="uppercase text-primary">Our Mission</p>
          <h3 className="section-heading">
            Innovating Today for a Smarter Tomorrow.
          </h3>
          <HrLine />
          <div
            data-aos="fade-up"
            className="block md:hidden w-full aspect-square"
          >
            <img
              src={missionImg}
              className="w-full h-full object-cover rounded-lg"
              alt="Our Mission"
            />
          </div>
          <p>
            At ZNTH Tech, our mission is to drive digital excellence by
            providing businesses with innovative, reliable, and tailored IT
            solutions. We strive to bridge the gap between technology and
            business success, empowering organizations to achieve their goals
            through cutting-edge advancements in AI, web development, mobile
            applications, and more. By fostering collaboration, embracing
            innovation, and maintaining a client-first approach, we aim to
            transform challenges into opportunities, enabling our clients to
            thrive in a fast-paced, ever-evolving digital world.
          </p>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
            <Link to="/contact-us" className="primary-btn sm:w-fit w-full">
              Request A Quote
            </Link>
            <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
              <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
                <ImPhone size={25} className="text-white" />
              </div>
              <div className="flex flex-col capitalize">
                <p className="">Call to ask any question</p>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="font-semibold"
                >
                  {companyDetails.phone}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[5rem] wrapper">
        <div
          data-aos="fade-up"
          className="space-y-4 flex flex-col sm:items-center sm:text-center max-w-2xl mx-auto"
        >
          <h3 className="uppercase text-primary">Our Team</h3>
          <HrLine />
        </div>
        <div className="mt-[2rem] max-w-4xl mx-auto flex flex-col gap-5 md:gap-10">
          <div data-aos="fade-up" className="grid sm:grid-cols-[35%_auto] gap-7">
            <div className="flex flex-col p-5 border border-primary rounded-2xl">
              <img
                src={team1}
                alt="CEO"
                className="w-full rounded-xl object-cover h-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="section-heading">Gaurav Hemant Chavan</h5>
              <p className="text-primary">Founder and CEO</p>
              <p>
                Gaurav is an accomplished IT professional, CEO, and Founder of
                ZNTH Tech, a leading AI-driven technology company. With a
                passion for innovation Gaurav has transformed ZNTH Tech into a
                trailblazer in AI solutions, driving cutting-edge advancements
                across industries. As Director, Gaurav continues to lead with
                vision and expertise, shaping the future of technology.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="mt-[2rem] flex flex-col-reverse sm:grid grid-cols-[auto_35%] gap-7"
          >
            <div className="flex flex-col gap-3">
              <h5 className="section-heading">Aayesha Irfan Raje</h5>
              <p className="text-primary">Co-Founder and Director </p>
              <p>
                Aayesha is a skilled IT professional, Co-Founder, and Director
                of ZNTH Tech, a leading AI-driven technology company. With a
                deep expertise in AI and IT, Aayesha has played a pivotal role
                in shaping ZNTH Tech into an industry leader. As Director,
                Aayesha continues to drive innovation and strategic growth
                within the tech space.
              </p>
            </div>
            <div className="flex flex-col p-5 border border-primary rounded-2xl">
              <img
                src={team2}
                alt="Co-Founder"
                className="w-full rounded-xl object-cover h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
};

export default AboutUs;
