import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Login: React.FC = () => {
  return (
    <div className="auth-container">
      <h1>Medical System Database</h1>
      <h2>Login with Wallet</h2>
      <div className="wallet-container">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Login;
