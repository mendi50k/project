import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ReportManagement from "./pages/ReportManagement";
import Login from "./components/Login";
import DogBreedIdentifier from "./components/DogBreedIdentifier";
import DogReport from "./components/DogReport";

export default function AppRoutes({ user, onLogin }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login onLogin={onLogin} />} />
      <Route path="/dog-identifier" element={<DogBreedIdentifier />} />
      <Route path="/dog-report" element={<DogReport />} />
      {user?.role === "employee" && <Route path="/reports" element={<ReportManagement />} />}
    </Routes>
  );
}