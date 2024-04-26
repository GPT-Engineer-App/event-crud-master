import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";

import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={isLoggedIn ? <Index /> : <Login onLogin={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
