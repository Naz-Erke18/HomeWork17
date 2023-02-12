import React from "react";
import { NavLink } from "react-router-dom";

const Schedule = () => {
  return (
    <div>
      <NavLink
        to="/schedule"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "blue" : "#fefbfb",
        })}
      >
        Schedule
      </NavLink>
    </div>
  );
};

export default Schedule;
