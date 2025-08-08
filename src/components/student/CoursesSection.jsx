import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AddContext } from "../../context/AddContext";
import CourseCard from "./CourseCard";
import "../../index.css";

const CoursesSection = () => {
  const { allCourses } = useContext(AddContext);

  return (
    <div className="py-10 md:px-40 px-8">
      <h2 className="txt-3xl font-medium text-gray-500 mb-5">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3 mb-5">
        Discover our top-rated courses across various categories. From coding
        and design to<br></br> business and wellness, our courses are crafted to
        deliver results.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 md:px-0 mt-6 md:mt-10 mb-10 md:mb-16">
        {allCourses.slice(0, 4).map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>

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
