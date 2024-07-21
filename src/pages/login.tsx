import React from "react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Web3 from "web3";
import type { KeyringPair } from "@polkadot/keyring/types";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface LoginProps {
  setAccount: (account: KeyringPair) => void;
}

const Login: React.FC<LoginProps> = ({ setAccount }) => {
  const router = useRouter();

  const handleLogin = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        const message = "Please sign this message to authenticate.";
        const signature = await web3.eth.personal.sign(message, account, "");

        const recoveredAccount = await web3.eth.personal.ecRecover(
          message,
          signature,
        );

        if (recoveredAccount.toLowerCase() === account.toLowerCase()) {
          router.push("/medicalHistory");
        } else {
          console.error("Signature validation failed.");
        }
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      console.error("No Ethereum provider found. Install MetaMask.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-container">
        <div className="welcome-message">
          <h1>Welcome to the Medical System Database</h1>
          <p>
            Securely log in to manage your medical records with ease. Please
            connect your wallet to get started.
          </p>
        </div>
        <div className="login-content">
          <h2>Login to Edit the Data</h2>
          <div className="wallet-container" onClick={handleLogin}>
            <ConnectButton />
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .auth-container {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          background-color: #eaf2fb;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1; /* Ensures the container expands to fill the space */
        }

        .welcome-message {
          margin-bottom: 20px;
        }

        .auth-container h1 {
          color: #0366d6;
          margin-bottom: 0.5rem;
        }

        .auth-container p {
          font-size: 1.1em;
          color: #333;
        }

        .auth-container h2 {
          margin-top: 0;
          font-size: 1.5em;
        }

        .wallet-container {
          margin-top: 20px;
          width: 100%; /* Ensures the button is not stretched */
          display: flex;
          justify-content: center;
        }

        button {
          display: inline-block;
          width: auto;
          padding: 8px 16px;
          background-color: #0366d6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1em;
          margin-top: 20px;
        }

        button:hover {
          background-color: #0353a4;
        }
      `}</style>
    </>
  );
};

export default Login;
