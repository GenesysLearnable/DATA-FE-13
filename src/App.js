import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="Signup" element={<Signup />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
