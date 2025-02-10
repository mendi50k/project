import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to Dog Report System</h1>
      <p>This platform allows users to report stray dogs and helps authorities manage the reports.</p>
      <div className="buttons-container">
        <p>Want to identify a dog's breed? Upload a picture and let our AI help you!</p>
        <Link to="/dog-identifier"><button className="button">Identify Dog Breed</button></Link>
        
        <p>Found a stray dog? Report it with location details so we can help.</p>
        <Link to="/dog-report"><button className="button">Report a Stray Dog</button></Link>
        
        <p>Are you an employee? Login to manage reports.</p>
        <Link to="/login"><button className="button login-button">Employee Login</button></Link>
      </div>
    </div>
  );
}