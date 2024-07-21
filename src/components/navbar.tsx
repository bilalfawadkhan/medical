import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2>Medical System</h2>
      <div className="navbar-links">
        {/* <Link href="/">Home</Link> */}
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
