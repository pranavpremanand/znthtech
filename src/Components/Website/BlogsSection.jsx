import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import HrLine from "../HrLine";
import BlogItem from "./BlogItem";
import { blogs } from "../../data/blogs";

const BlogsSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <section className="pt-[4rem] wrapper">
      <div data-aos='fade-up' className="space-y-4 flex flex-col sm:items-center sm:text-center max-w-2xl mx-auto">
        <p className="uppercase text-primary">latest blogs</p>
        <h3 className="section-heading">
          Read The Latest Articles from Our Blog Post
        </h3>
        <HrLine />
      </div>
      <div data-aos="fade-up" ref={sliderRef} className="keen-slider mt-7">
        {blogs.map((item) => (
          <BlogItem key={item.id} item={item} />
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-4 mt-5"
        >
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-black/5 p-3 rounded-full hover:bg-black/10 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-black/5 p-3 rounded-full hover:bg-black/10 transition-colors"
          >
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogsSection;
