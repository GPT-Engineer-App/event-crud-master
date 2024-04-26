import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Comments from "./pages/Comments.jsx";

import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={isLoggedIn ? <Index onLogout={setIsLoggedIn} /> : <Login onLogin={setIsLoggedIn} />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </Router>
  );
}

export default App;
