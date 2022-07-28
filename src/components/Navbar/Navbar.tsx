import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";

import "./Navbar.scss";

const Navbar = (classNames: any) => {
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
    <nav className={`app__navbar ${classNames}`}>
      <ul>
        {menuItem.map((item, idx) => {
          const Icon = icons[idx];
          return (
            <li key={item.id}>
              <Icon className="icon" id="ikonka" />
              <a href={`#${item.id}`}>
                <p>{item.name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
