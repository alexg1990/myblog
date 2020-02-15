import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = function() {
  return (
    <div className="container">
      <Link className="link" to="/">
        General
      </Link>
      <Link className="link" to="/javascript">
        Javascript
      </Link>
      <Link className="link" to="/react">
        React
      </Link>
      <Link className="link" to="/typescript">
        Typescript
      </Link>
    </div>
  );
};

export default Header;
