import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import NewPassword from "./Pages/NewPassword"
import MediaTracking from "./Pages/MediaTracking";
import Faq from "./Pages/Faq";
import "./App.css";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import VerificationPage from "./Pages/VerificationPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="Login" element={<Login />} />
          <Route path="VerificationPage" element={<VerificationPage />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="NewPassword" element={<NewPassword />} />
          <Route path="MediaTracking" element={<MediaTracking />} />
          <Route path="FAQ" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
