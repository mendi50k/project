import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ReportManagement from "./pages/ReportManagement";
import DogBreedIdentifier from "./components/DogBreedIdentifier";
import DogReport from "./components/DogReport";
import Login from "./components/Login";

export default function AppRoutes({ user, onLogin }) {
  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dog-identifier" element={<DogBreedIdentifier />} />
      <Route path="/dog-report" element={<DogReport />} />
      <Route path="/login" element={<Login onLogin={onLogin} />} />
      <Route path="/reports" element={user?.role === "employee" ? <ReportManagement /> : <Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
