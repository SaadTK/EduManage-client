import React from "react";
import { Link } from "react-router-dom";

const CoursesSection = () => {
  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="txt-3xl font-medium text-gray-500 mb-5">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3 mb-5">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>

      <Link
        className=" mb-5 text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
      >
        Show All Courses
      </Link>
    </div>
  );
};

export default CoursesSection;
