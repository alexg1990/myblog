import React from "react";
import { Link } from "react-router-dom";

const Header = function() {
  return (
    <div>
      <Link to="/">General</Link>
      <Link to="/javascript">Javascript</Link>
      <Link to="/react">React</Link>
      <Link to="/typescript">Typescript</Link>
    </div>
  );
};

export default Header;
