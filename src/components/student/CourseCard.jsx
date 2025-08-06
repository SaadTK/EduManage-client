import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AddContext } from "../../context/AddContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency } = useContext(AddContext);

  return (
    <Link
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg"
      to={"/course/" + course._id}
      onClick={() => scrollTo(0, 0)}
    >
      <img
        className="w-full"
        src={course.courseThumbnail}
        alt={course.courseTitle}
      />

      <div className="p-3 text-left">
        <h3 className="text-base text-black font-semibold">
          {course.courseTitle}
        </h3>
        {/* <p className="text-gray-500">{course.educator_name}</p> */}

        <div className="flex items-center space-x-2">
          <p className="text-black">4.5</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                className="w-3.5 h-3.5"
                key={i}
                src={assets.star}
                alt="ratings"
              />
            ))}
          </div>
          <p className="text-gray-500">22</p>
        </div>
        <p className="text-base font-semibold text-gray-800">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
