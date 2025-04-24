import React from "react";
import PageBanner from "../Components/Website/PageBanner";
import banner from "../assets/images/banners/blogs.webp";
import BlogItem from "../Components/Website/BlogItem";
import HrLine from "../Components/HrLine";
import { Link, Navigate, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === id);

  const latestBlogs = blogs
    .filter((item) => item.id !== id)
    .sort((a, b) => a.date - b.date);

  if (!blog) {
    return <Navigate to="/blogs" />;
  }

  return (
    <>
      <PageBanner banner={banner} title="Blogs" />
      <div className="wrapper pt-[5rem]">
        <img
          src={blog.image}
          alt="Blog"
          className="md:aspect-video lg:aspect-[13/6] w-full object-cover rounded-lg"
        />
        <div className="pt-[2rem] space-y-4 md:space-y-6">
          <p className="text-primary uppercase text-sm w-fit">{blog.date}</p>
          <h2 className="section-heading">{blog.heading}</h2>
          <div className="flex gap-4 justify-between">
            <HrLine />
            <HrLine />
          </div>
          <div dangerouslySetInnerHTML={{ __html: blog.html }} />
        </div>
        <hr className="border-primary/30 my-[3rem]" />
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="section-heading">Recent Blogs</h3>
            <HrLine />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {latestBlogs.map((item) => (
              <BlogItem key={item} item={item} />
            ))}
          </div>
          <div className="pt-[2rem]">
            <Link to="/blogs" className="w-fit mx-auto primary-btn">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
