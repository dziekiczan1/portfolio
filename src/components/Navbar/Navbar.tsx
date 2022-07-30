import { HiHome } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

import "./Navbar.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const ListItem = ({ isActive, onClick, name, id, idx }: any) => {
    const className = `${isActive ? "active" : "off"}`;
    const Icon = icons[idx];
    return (
      <li onClick={onClick} className={className}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="motiondiv"
        >
          <a href={`#${id}`}>
            <Icon className="icon" />
            <p>{name}</p>
          </a>
        </motion.div>
      </li>
    );
  };

  const icons = [HiHome, BsFillPersonFill, BsFillGearFill, AiFillMessage];
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

  const [activeElem, setActive] = useState("Home");
  const handleToggle = (newValue: any) => {
    setActive(newValue);
  };

  return (
    <nav className={`app__navbar`}>
      <ul>
        {menuItem.map((item, idx) => {
          return (
            <ListItem
              key={item.name}
              isActive={activeElem === item.name}
              onClick={() => handleToggle(item.name)}
              id={item.id}
              idx={idx}
              name={item.name}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
