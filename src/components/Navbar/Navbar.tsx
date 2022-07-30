import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";

import "./Navbar.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [select, setSelect] = useState(false);
  const handleSelect = () => {
    setSelect(!select);
  };
  const icons = [HiHome, BsFillPersonFill, BsFillGearFill, BiMessage];
  const menuItem = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  return (
    <nav className={`app__navbar`}>
      <ul>
        {menuItem.map((item, idx) => {
          const Icon = icons[idx];
          return (
            <li key={item.id} onClick={handleSelect}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Icon className="icon" />
                <a href={`#${item.id}`}>
                  <p>{item.name}</p>
                </a>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
