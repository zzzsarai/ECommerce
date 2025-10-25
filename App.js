import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/Homepage";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<h1>Profile Page - Under Construction</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
