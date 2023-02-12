import React from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  return (
    <div>
      <NavLink
        to="/courses/materials"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "blue" : "#fefbfb",
        })}
      >
        Course
      </NavLink>
    </div>
  );
};

export default Course;
