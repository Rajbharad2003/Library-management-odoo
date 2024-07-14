import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Books from "./pages/Books";
import ViewBook from "./pages/ViewBook";

function App() {
  return (
    <div className="w-screen min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<ViewBook />} />
      </Routes>
    </div>
  );
}

export default App;
