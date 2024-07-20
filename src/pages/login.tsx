import React, { useState } from "react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Web3 from "web3";
import type { KeyringPair } from "@polkadot/keyring/types";

// Define the type for the props
interface LoginProps {
  setAccount: (account: KeyringPair) => void;
}

const Login: React.FC<LoginProps> = ({ setAccount }) => {
  const router = useRouter();

  const  handleLogin = async () => {
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
        const recoveredAccount = await web3.eth.personal.ecRecover(message, signature);

        if (recoveredAccount.toLowerCase() === account.toLowerCase()) {
          console.log("Signature is valid. Account:", account);

          // Here you would convert the account to a KeyringPair and set it
          // setAccount(convertToKeyringPair(account));

        // Navigate to the next page after successful login
        // router.push("/dashboard");
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
    <div className="auth-container">
      <h1>Medical System Database</h1>
      <h2>Login with Wallet</h2>
      <div className="wallet-container" onClick={handleLogin}>
        <ConnectButton />
      </div>
    </div>
  );
}

export default Login;
