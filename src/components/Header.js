import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          League Expert
        </Link>
        <Link to="/home" className="space">
          Home
        </Link>
      </header>
    </div>
  );
};

export default Header;
