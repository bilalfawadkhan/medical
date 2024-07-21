import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
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
        </div>
        <p className="copyright">2024© Medical System</p>
      </div>
      <style jsx>{`
        .footer {
          background-color: #f8f9fa;
          border-top: 1px solid #e9ecef;
          padding: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          position: static;
        }
        .footer-content {
          max-width: 1200px;
          width: 100%;
          text-align: center;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1rem; /* Adds space between links */
          margin-bottom: 1rem;
        }
        .footer-link {
          display: flex;
          align-items: center;
          color: #007bff;
          text-decoration: none;
          font-size: 1rem;
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }
        .footer-link:hover {
          color: #0056b3;
          text-decoration: underline;
          transform: translateY(-2px); /* Slight lift effect */
        }
        .footer-link img {
          margin-right: 8px;
        }
        .copyright {
          font-size: 0.875rem;
          color: #6c757d;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
