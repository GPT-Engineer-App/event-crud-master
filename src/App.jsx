import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Comments from "./pages/Comments.jsx";
import NavBar from './components/NavBar';

import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={isLoggedIn ? <Index onLogout={setIsLoggedIn} /> : <Login onLogin={setIsLoggedIn} />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </Router>
  );
}

export default App;
