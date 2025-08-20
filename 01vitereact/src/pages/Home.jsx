import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home">
      <h2>Welcome to the Crime Report Portal</h2>
      <p>Report crimes securely and anonymously. Help make your community safer.</p>
      <Link to="/report">
        <button className="btn">Report a Crime</button>
      </Link>
    </div>
  );
}

export default Home;
