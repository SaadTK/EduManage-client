import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";

export const AddContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [allCourses, setAllCourses] = useState([]);

  //Fetch All courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
  };

  return (
    <AddContext.Provider value={value}>{props.children}</AddContext.Provider>
  );
};
