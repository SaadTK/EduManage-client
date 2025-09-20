// src/context/AddContext.jsx
import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import {
  auth,
  googleProvider,
} from "../firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AddContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [user, setUser] = useState(null);

  // 🔹 Firebase auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        navigate("/course-list"); // 👈 redirect after login
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // 🔹 Google login
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/course-list"); // 👈 redirect
    } catch (err) {
      console.error("Google login error:", err.message);
    }
  };

  // 🔹 Email/Password Signup
  const signupWithEmail = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/course-list"); // 👈 redirect
    } catch (err) {
      console.error("Signup error:", err.message);
    }
  };

  // 🔹 Email/Password Login
  const loginWithEmail = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/course-list"); // 👈 redirect
    } catch (err) {
      console.error("Login error:", err.message);
    }
  };

  // 🔹 Logout
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // 👈 back to home
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  // Dummy fetch
  const fetchAllCourses = async () => setAllCourses(dummyCourses);
  const fetchUserEnrolledCourses = async () => setEnrolledCourses(dummyCourses);

  useEffect(() => {
    fetchAllCourses();
    fetchUserEnrolledCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateNoOfLectures,
    calculateCourseDuration,
    calculateChapterTime,
    enrolledCourses,
    fetchUserEnrolledCourses,
    // 🔹 Auth exports
    user,
    loginWithGoogle,
    signupWithEmail,
    loginWithEmail,
    logout,
  };

  return (
    <AddContext.Provider value={value}>{props.children}</AddContext.Provider>
  );
};

// Helper functions same as before…
const calculateRating = (course) => {
  if (course.courseRatings.length === 0) return 0;
  let total = 0;
  course.courseRatings.forEach((r) => (total += r.rating));
  return total / course.courseRatings.length;
};
const calculateChapterTime = (chapter) => {
  let time = 0;
  chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
  return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
};
const calculateCourseDuration = (course) => {
  let time = 0;
  course.courseContent.map((chapter) =>
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
  );
  return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
};
const calculateNoOfLectures = (course) => {
  let total = 0;
  course.courseContent.forEach((ch) => {
    if (Array.isArray(ch.chapterContent)) {
      total += ch.chapterContent.length;
    }
  });
  return total;
};
