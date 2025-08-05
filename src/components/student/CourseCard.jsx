import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AddContext";

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);

  return (
    <div>
      <img src={course.courseThumbnail} alt={course.courseTitle} />

      <div>
        <h3>{course.courseTitle}</h3>
        <p>{course.educator.name}</p>

        <div>
          <p>4.5</p>
          <div>
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.star} alt="ratings" />
            ))}
          </div>
          <p>22</p>
        </div>
        <p>
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
