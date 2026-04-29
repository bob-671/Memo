import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaThLarge,
  FaRobot,
  FaUtensils,
  FaCalendar,
  FaBlog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import logo from '../assets/brandlogo.png'
function User() {
  const [isOpen, setIsOpen] = useState(true);

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <FaThLarge /> },
    { name: "AI Tracker", path: "/ai", icon: <FaRobot /> },
    { name: "My Plan", path: "/plan", icon: <FaUtensils /> },
    { name: "Consultations", path: "/consultations", icon: <FaCalendar /> },
    { name: "Blog", path: "/blog", icon: <FaBlog /> },
  ];

  return (

    <motion.div
      animate={{ width: isOpen ? 250 : 80 }}
      className="sidebar"
    >
      {/* Top */}
      <div className="top">
  

  <FaBars className="toggle" onClick={() => setIsOpen(!isOpen)} />
<div className="brand">
    
    <img src={logo} alt="logo" className="logoImg" />
    {isOpen && <h2 className="logoText">Perfect Body</h2>}
  </div>
  </div>

      

      {/* Menu */}
      <div className="menu">
        {menu.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            className={({ isActive }) =>
              "menuItem " + (isActive ? "active" : "")
            }
          >
            <div className="icon">{item.icon}</div>

            {isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {item.name}
              </motion.span>
            )}
          </NavLink>
        ))}
      </div>

      {/* Logout */}
      <div className="bottom">
        <div className="menuItem logout">
          <FaSignOutAlt />
          {isOpen && <span>Log Out</span>} 
        </div>
      </div>
    </motion.div>
  );
}

export default User;