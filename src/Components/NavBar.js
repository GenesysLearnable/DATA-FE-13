import "./NavBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCog, FaListUl, FaBars } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineQueueMusic } from "react-icons/md";
import { PiMusicNotesPlusFill } from "react-icons/pi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const navBarData = [
  {
    title: "Profile",
    path: "/Profile",
    logo: <CgProfile className="nav-icon" />,
  },
  {
    title: "Dashboard",
    path: "/Dashboard",
    logo: <FaListUl className="nav-icon" />,
  },
  {
    title: "Manage Playlist",
    path: "/Playlist",
    logo: <MdOutlineQueueMusic className="nav-icon" />,
  },
  {
    title: "Media Tracking",
    path: "/MediaTracking",
    logo: <PiMusicNotesPlusFill className="nav-icon" />,
  },
  {
    title: "Favorite",
    path: "/Favorite",
    logo: <MdOutlineFavoriteBorder className="nav-icon" />,
  },
];

const help = [
  {
    id: 1,
    title: "Settings",
    path: "/Settings",
    logo: <FaCog className="nav-icon" />,
  },
  {
    id: 2,
    title: "FAQ",
    path: "/FAQ",
    logo: <FaRegCircleQuestion className="nav-icon" />,
  },
];

function NavBar() {
  const [activeItem, setActiveItem] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (index, path) => {
    if (index !== activeItem) {
      setActiveItem(index);
      navigate(path);
    }
  };

  const handleClick = (id, path) => {
    setActiveId(id);
    navigate(path);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <header className="nav-header">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0a312d70048a81c3e0b97420bdbb31a4d89d2fb5982aec87ed80114733eedd2?apiKey=66cde03c14284deb81366fe06ee3971c&"
            alt="Media Hub Logo"
            className="logo"
          />
          <h1 className="title">Media Hub</h1>
          <FaBars className="hamburger" onClick={toggleSidebar} />
        </header>
        <div className="nav-container">
          <div className="nav">
            <h3>Menu</h3>
            <ul className="nav-ul">
              {navBarData.map((nav, index) => (
                <li
                  key={index}
                  className={`nav-li ${index === activeItem ? "active" : ""}`}
                  onClick={() => handleItemClick(index, nav.path)}
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
              {help.map((item) => (
                <li
                  key={item.id}
                  className={`nav-li ${item.id === activeId ? "active" : ""}`}
                  onClick={() => handleClick(item.id, item.path)}
                >
                  <div className="icon-div">
                    {item.logo}
                    {item.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
