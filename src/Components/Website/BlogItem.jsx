import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogItem = ({ item }) => {
  return (
    <Link
      to={`/blogs/${item.id}`}
      className="keen-slider__slide space-y-2 border dark:border-white/20 border-black/20 group"
    >
      <img
        src={item.image}
        alt={item.heading}
        className="w-full aspect-video object-cover group-hover:brightness-75 duration-200 transition-all"
      />
      <div className="px-5 py-4 space-y-2">
        <h6 className="text-lg font-semibold text-secondary dark:text-white line-clamp-2 group-hover:text-primary duration-200 transition-all">
          {item.heading}
        </h6>
        <p className="line-clamp-3 text-400 dark:text-gray-300">
          {item.html.replace(/<[^>]*>"?/gm, "").substring(0, 350)}...
        </p>
        <Link
          to="/blogs/1"
          className="text-primary flex items-center gap-2 group-hover:text-secondary dark:group-hover:text-white w-fit"
        >
          Read More <FaArrowRight />
        </Link>
      </div>
    </Link>
  );
};

export default BlogItem;
