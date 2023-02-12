import React from 'react'
import { NavLink } from 'react-router-dom'

const Notification = () => {
  return (
    <div>
    <NavLink 
     to="/notifications"
     style={({ isActive }) => ({
       color: isActive ? "#fff" : "#545e6f",
       background: isActive ? "blue" : "#fefbfb",
     })}>Notification</NavLink>
    </div>
  )
}

export default Notification