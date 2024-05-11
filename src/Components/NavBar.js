import "./NavBar.css";
import { useState } from "react";
import { FaCog, FaListUl } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineQueueMusic } from "react-icons/md";
import { PiMusicNotesPlusFill } from "react-icons/pi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const navBarData = [
  {
    title: "Profile",
    path: "./",
    logo: <CgProfile className="nav-icon" />,
  },
  {
    title: "Dashboard",
    path: "./",
    logo: <FaListUl className="nav-icon" />,
  },
  {
    title: "Playlist",
    path: "./",
    logo: <MdOutlineQueueMusic className="nav-icon" />,
  },
  {
    title: "Media Tracking",
    path: "./",
    logo: <PiMusicNotesPlusFill className="nav-icon" />,
  },
  {
    title: "Favorite",
    path: "./",
    logo: <MdOutlineFavoriteBorder className="nav-icon" />,
  },
];

const help = [
  {
    title: "Settings",
    path: "./",
    logo: <FaCog className="nav-icon" />,
  },
  {
    title: "FAQ",
    path: "./",
    logo: <FaRegCircleQuestion className="nav-icon" />,
  },
];

function NavBar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="sidebar">
      <h2>Media Hub</h2>
      <div className="nav-container">
        <div className="nav">
          <h3>Menu</h3>
          <ul className="nav-ul">
            {navBarData.map((nav, index) => (
              <li
                // className="nav-li"
                key={index}
                className={`nav-li ${index === activeItem ? "active" : ""}`}
                onClick={() => handleItemClick(index)}
              >
                <div className="icon-div">
                  {nav.logo}
                  {nav.title}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav">
          <h3>Help</h3>
          <ul className="nav-ul">
            {help.map((help) => (
              <li className="nav-li">
                <div className="icon-div">
                  {help.logo}
                  {help.title}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
