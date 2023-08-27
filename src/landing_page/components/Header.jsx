import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>AKDEV</h1>
      <main>
        <HashLink className="link" to={"/#home"}>Home</HashLink>
        <Link className="link" to={"/contact"}>Contact</Link>
        <HashLink className="link" to={"/#about"}>About</HashLink>
        <HashLink className="link" to={"/#brands"}>Brands</HashLink>
        <Link className="link" to={"/services"}>Services</Link>
      </main>
    </nav>
  );
};

export default Header;