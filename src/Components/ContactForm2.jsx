import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { SpinnerContext } from "./SpinnerContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../data/constant";

const ContactForm2 = () => {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      data-aos="fade-up"
      className="grid grid-cols-1 gap-5"
    >
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 outline-none bg-primary/10 rounded w-full"
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
            <small className="text-primary">{errors.fullName.message}</small>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 outline-none bg-primary/10 rounded w-full"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <small className="text-primary">{errors.email.message}</small>
          )}
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Subject"
          className="p-2 outline-none bg-primary/10 rounded w-full"
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
          <small className="text-primary">{errors.subject.message}</small>
        )}
      </div>
      <div>
        <textarea
          rows="5"
          placeholder="Message"
          className="p-2 outline-none bg-primary/10 rounded w-full"
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
          <small className="text-primary">{errors.message.message}</small>
        )}
      </div>
      <button type="submit" className="primary-btn">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm2;
