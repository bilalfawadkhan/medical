// src/pages/about.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push("/login");
  };

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
        <button className="sign-up-button" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
      <Footer />
      <style jsx>{`
        .about-container {
          background-color: #ffffff;
          min-height: 100vh;
          padding: 0;
        }
        .content {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
        }
        .content h1 {
          color: #0366d6;
          margin-bottom: 1rem;
        }
        .content p {
          font-size: 1.5em;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .sign-up-button {
          padding: 15px 25px;
          background-color: #0366d6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1.2em;
          margin-top: 20px;
        }
        .sign-up-button:hover {
          background-color: #0353a4;
        }
      `}</style>
    </div>
  );
};

export default Home;
