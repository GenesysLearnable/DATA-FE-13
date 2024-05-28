import NavBar from "../Components/NavBar";
import * as React from "react";
import {
  FaLanguage,
  FaComments,
  FaQuestionCircle,
  FaInfoCircle,
  FaStar,
  FaSearch,
} from "react-icons/fa";
import styles from "./Settings.module.css";

function Settings() {
  return (
    <div>
      <NavBar />
      <MyComponent />
    </div>
  );
}

export default Settings;

function UserProfile({ imageSrc, userName, userEmail }) {
  return (
    <div className={styles.userProfile}>
      <div className={styles.userImageContainer}>
        <img
          src={imageSrc}
          alt={`Profile of ${userName}`}
          className={styles.userImage}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/219110923fbb28a780f28f7373511f240e900adf345ea4483ec78d7705082fa1?apiKey=66cde03c14284deb81366fe06ee3971c&"
          alt="decorative"
          className={styles.imageOverlay}
        />
      </div>
      {/* <div className={styles.userInfo}>
        <p className={styles.userName}>{userName}</p>
        <p className={styles.userEmail}>{userEmail}</p>
      </div> */}
    </div>
  );
}

function SettingItem({ Icon, title, additionalInfo }) {
  return (
    <div className={styles.settingItem}>
      <div className={styles.settingIconTitle}>
        <Icon className={styles.settingIcon} />
        <span className={styles.settingTitle}>{title}</span>
      </div>
      <div className={styles.settingAdditionalInfo}>{additionalInfo}</div>
    </div>
  );
}

function MyComponent() {
  const settings = [
    { Icon: FaLanguage, title: "Languages", info: "EN" },
    { Icon: FaComments, title: "Feedback", info: null },
    { Icon: FaQuestionCircle, title: "Help", info: null },
    { Icon: FaInfoCircle, title: "About", info: null },
    { Icon: FaStar, title: "Rate This App", info: null },
  ];

  return (
    <main className={styles.smain}>
      <header className={styles.header}>
        <div className={styles.searchBar}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search for settings"
            className={styles.searchInput}
          />
        </div>
      </header>
      <nav className={styles.navigation}>
        <button className={`${styles.navItem} ${styles.highlighted}`}>
          General
        </button>
        <button className={styles.navItem}>Sign Up</button>
        <button className={styles.navItem}>Notifications</button>
        <button className={styles.navItem}>Security & Privacy</button>
      </nav>
      <main className={styles.content}>
        <UserProfile
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b4436969940879803bb1230ad4a0b6314f6d324d1430f287f4687360e57b89ca?apiKey=66cde03c14284deb81366fe06ee3971c&"
          userName="Faychi Favour"
          userEmail="Faychiatuhnancy@gmail.com"
        />
        {settings.map((setting, index) => (
          <SettingItem
            key={index}
            Icon={setting.Icon}
            title={setting.title}
            additionalInfo={setting.info}
          />
        ))}
        <div className={styles.logout}>
          <button className={styles.logoutBtn}>Sign Out</button>
        </div>
      </main>
    </main>
  );
}
