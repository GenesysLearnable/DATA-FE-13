import NavBar from "../Components/NavBar";
import { useState } from "react";
import { FaApple, FaSpotify, FaSoundcloud } from "react-icons/fa";
import "../Pages/Profile.css";

const icons = [
  {
    id: 1,
    icon: <FaApple className="icon" />,
  },
  {
    id: 2,
    icon: <FaSpotify className="icon" />,
  },
  {
    id: 3,
    icon: <FaSoundcloud className="icon" />,
  },
];

export default function Profile() {
  return (
    <div className="profile">
      <NavBar />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div className="main-container">
      <ProfileName />
      <SyncM />
      <Account />
      <Button />
    </div>
  );
}
function ProfileName() {
  return (
    <div className="profile-container">
      <div className="profile-details">
        <img
          src="https://images.unsplash.com/photo-1715041348173-1a50eed0ef68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
          alt="name"
          className="profile-img"
        />
        <div className="name-flex">
          <h2 className="profile-name">faychi Favour</h2>
          <p className="profile-email">faychi@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
function SyncM() {
  return (
    <div className="syncm">
      <h2>Sync History</h2>

      <div className="sync">
        <div className="sync-lay">
          <ul className="plat-icon">
            {icons.map((icon) => (
              <li key={icon.id}>{icon.icon}</li>
            ))}
          </ul>
          <p>3/3 playlist imported</p>
          <button>Add Account</button>
        </div>
      </div>
    </div>
  );
}
function Account() {
  const [form, setForm] = useState("");
  const [password, setPassword] = useState("");

  function handleForm(e) {
    // Fix: preventDefault not prevent.default
  }

  return (
    <div className="form">
      <h2>Account</h2>
      <form onSubmit={handleForm} className="form-lay">
        <input
          type="email"
          placeholder="Email"
          value={form}
          onChange={(e) => setForm(e.target.value)}
          className="border-bottom"
        />
        <input
          type="password"
          placeholder="Change Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
}
function Button() {
  function handleDeleteAccount() {
    // Add logic for deleting account
  }

  function handleSignOut() {
    // Add logic for signing out
  }

  return (
    <div className="btn">
      <button onClick={handleDeleteAccount}>Delete Account</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
