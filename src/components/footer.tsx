// src/components/Footer.tsx
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link href="https://github.com/bilalfawadkhan/medical" passHref>
          <Image
            src="/github-mark.png"
            alt="GitHub Logo"
            width={24}
            height={24}
          />
          GitHub
        </Link>
        <Link href="https://t.me/VincentKnight" passHref>
          <Image
            src="/telegram-logo.png"
            alt="Telegram Logo"
            width={24}
            height={24}
          />
          Telegram
        </Link>
        <p className="copyright">2024© Medical System</p>
      </div>
      <style jsx>{`
        .footer {
          background-color: #ffffff;
          border-top: 1px solid #ddd;
          padding: 1rem 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 80px; /* Adjust height as needed */
          position: static;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .footer-link {
          display: flex;
          align-items: center;
          margin: 0.5rem 0; /* Adjust margin for vertical spacing */
          color: #0366d6;
          text-decoration: none;
        }
        .footer-link:hover {
          text-decoration: underline;
        }
        .footer-link img {
          margin-right: 8px;
        }
        .copyright {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: #333;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
