import { Link } from "react-router-dom";
import dogBreedImage from "../assets/dog-breed.jpg";
import reportImage from "../assets/report-dog.jpg";
import manageReportsImage from "../assets/manage-reports.jpg"; // הוספת התמונה החדשה

export default function Home({ user }) {
  return (
    <div className="page-container">
      <h1>Welcome to Dog Report System</h1>
      <p>
        This platform allows users to report stray dogs and helps authorities
        manage the reports.
      </p>

      <div className="cards-container">
        <Link to="/dog-identifier" className="card">
          <img src={dogBreedImage} alt="Identify Dog Breed" />
          <h3>Identify Dog Breed</h3>
        </Link>

        <Link to="/dog-report" className="card">
          <img src={reportImage} alt="Report a Stray Dog" />
          <h3>Report a Stray Dog</h3>
        </Link>

        {/* הצגת הכרטיס של ניהול הדיווחים רק אם המשתמש מחובר כעובד */}
        {user?.role === "employee" && (
          <Link to="/reports" className="card">
            <img src={manageReportsImage} alt="Manage Reports" />
            <h3>Manage Reports</h3>
          </Link>
        )}
      </div>
    </div>
  );
}
