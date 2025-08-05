import React from "react";
import Hero from "../../components/student/Hero";
import Companies from "../../components/student/Companies";
import CoursesSection from "../../components/student/CoursesSection";

const Home = () => {
  return (
    <main className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies></Companies>
      <CoursesSection></CoursesSection>
    </main>
  );
};

export default Home;
