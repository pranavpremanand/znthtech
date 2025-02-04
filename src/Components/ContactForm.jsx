import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import HrLine from "./HrLine";
import { TiArrowBack } from "react-icons/ti";
import { ImPhone } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { companyDetails } from "../data/constant";
import { SpinnerContext } from "./SpinnerContext";
import toast from "react-hot-toast";
import axios from "axios";

const ContactForm = () => {
  const { setLoading } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
    mode: "all",
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      let body =
        "Full Name : " +
        values.fullName +
        "\n" +
        "Email : " +
        values.email +
        "\n" +
        "Message : " +
        values.message +
        "\n";

      const data = {
        body,
        name: "ZNTH Tech",
        subject: "New Enquiry",
        to: companyDetails.email,
      };

      const res = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        data
      );

      if (res.data.success) {
        toast.success(res.data.message);
        reset();
        navigate("/thank-you");
      } else {
        toast.error(res.data.message);
        console.log(res.data);
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="wrapper pt-[5rem]">
      <div className="grid md:grid-cols-[55%_auto] gap-7">
        <div data-aos="fade-up">
          <div className="space-y-4 text-start">
            <p className="uppercase text-primary">request a quote</p>
            <h3 className="section-heading">
              Need A Free Quote? Please Feel Free to Contact Us
            </h3>
            <HrLine />
          </div>
          <div className="mt-5 grid sm:grid-cols-2 gap-3 sm:gap-5">
            <div className="">
              <TiArrowBack size={25} className="inline -mt-2 text-primary" />
              <span className="font-bold ml-2">Reply within 24 hours</span>
            </div>
            <div className="">
              <ImPhone size={20} className="inline -mt-2 text-primary" />
              <span className="font-bold ml-2">24 hrs telephone support</span>
            </div>
          </div>
          <p className="mt-5">
            I'd be happy to provide you with a free quote! However, I would need
            more information about what you need a quote for. Please provide
            details about the product or service you're interested in, any
            specific requirements, and any other relevant information, so I can
            assist you in generating an accurate quote.
          </p>
          <div className="mt-7 flex gap-3 sm:justify-center sm:w-fit w-full">
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
        <form
          data-aos="fade-up"
          className="bg-primary p-7 space-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              type="text"
              className="w-full p-2 outline-none text-secondary"
              placeholder="Full Name*"
              {...register("fullName", {
                required: "Full Name is required",
                validate: (value) => {
                  if (value.trim() === "") {
                    return "Full Name is required";
                  }
                },
              })}
            />
            {errors.fullName && (
              <small className="text-secondary">
                {errors.fullName.message}
              </small>
            )}
          </div>
          <div>
            <input
              type="email"
              className="w-full p-2 outline-none text-secondary"
              placeholder="Email*"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <small className="text-secondary">{errors.email.message}</small>
            )}
          </div>
          <div>
            <input
              type="text"
              className="w-full p-2 outline-none text-secondary"
              placeholder="Subject*"
              {...register("subject", {
                required: "Subject is required",
                validate: (value) => {
                  if (value.trim() === "") {
                    return "Subject is required";
                  }
                },
              })}
            />
            {errors.subject && (
              <small className="text-secondary">{errors.subject.message}</small>
            )}
          </div>
          <div>
            <textarea
              rows="5"
              className="w-full p-2 outline-none text-secondary"
              placeholder="Message*"
              {...register("message", {
                required: "Message is required",
                validate: (value) => {
                  if (value.trim() === "") {
                    return "Message is required";
                  }
                },
              })}
            />
            {errors.message && (
              <small className="text-secondary">{errors.message.message}</small>
            )}
          </div>
          <button type="submit" className="secondary-btn w-full">
            Request A Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
