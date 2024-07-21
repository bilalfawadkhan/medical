// src/pages/about.tsx
import React from "react";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="content">
        <h1>About Us</h1>
        <p>
          Welcome to the Medical System Database. Our goal is to provide a
          secure and efficient platform for managing medical records.
        </p>
        <p>
          Our system allows users to add, view, and manage their medical records
          in a seamless manner.
        </p>
        <p>
          We are committed to ensuring the privacy and security of your data.
        </p>
      </div>
    </div>
  );
};

export default Home;
