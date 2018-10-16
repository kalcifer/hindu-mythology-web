import React from "react";
import { Link } from "gatsby";

export default () => (
  <div>
    <h2>Splash page</h2>
    <div>
      <Link to="/gods">Gods</Link>
      <Link to="/scriptures">Scriptures</Link>
      <Link to="/stories">Stories</Link>
    </div>
  </div>
);
