import React, { useState } from "react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Web3 from "web3";
import type { KeyringPair } from "@polkadot/keyring/types";
import Navbar from "../components/navbar";

// Define the type for the props
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

        // Message to be signed
        const message = "Please sign this message to authenticate.";
        const signature = await web3.eth.personal.sign(message, account, "");

        // Optionally, verify the signature on the server side
        console.log("Account:", account);
        console.log("Signature:", signature);

        // Verify the signature
        const recoveredAccount = await web3.eth.personal.ecRecover(
          message,
          signature,
        );

        if (recoveredAccount.toLowerCase() === account.toLowerCase()) {
          console.log("Signature is valid. Account:", account);

          // Here you would convert the account to a KeyringPair and set it
          // setAccount(convertToKeyringPair(account));

          // Navigate to the next page after successful login
          router.push("/medicalRecords");
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
        <h1>Medical System Database</h1>
        <h2>Login with Wallet</h2>
        <div className="wallet-container" onClick={handleLogin}>
          <ConnectButton/>
        </div>
      </div>

      <style jsx global>{`
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
        }

        .auth-container h1 {
          color: #0366d6;
          margin-bottom: 0.5rem;
        }

        .auth-container h2 {
          margin-top: 0;
          font-size: 1.5em;
        }

        .wallet-container {
          margin-top: 20px;
        }

        button {
          display: block;
          width: 100%;
          padding: 8px;
          margin: 8px 0;
          background-color: #0366d6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1em;
        }

        button:hover {
          background-color: #0353a4;
        }
      `}</style>
    </>
  );
};

export default Login;
