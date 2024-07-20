import React, { useState } from "react";
import { Keyring } from "@polkadot/keyring";
import { useNavigate } from "react-router-dom";

import type { KeyringPair } from "@polkadot/keyring/types";

// Define the type for the props
interface LoginProps {
  setAccount: (account: KeyringPair) => void;
}

const Login: React.FC<LoginProps> = ({ setAccount }) => {
  const [mnemonic, setMnemonic] = useState<string>("");
//   const navigate = useNavigate();

  const handleLogin = () => {
    // const keyring = new Keyring();
    // const pair = keyring.addFromUri(mnemonic);
    // setAccount(pair);
    // navigate("/history");
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="text"
        value={mnemonic}
        onChange={(e) => setMnemonic(e.target.value)}
        placeholder="Enter mnemonic"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
