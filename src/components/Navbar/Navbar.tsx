import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";

import "./Navbar.scss";

const Navbar = () => {
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
    <nav className="app__navbar">
      <ul>
        {menuItem.map((item, idx) => {
          const Icon = icons[idx];
          return (
            <Link to={item.id} key={item.id} className="item-link">
              <li>
                <Icon className="icon" />
                <p>{item.name}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
