import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import MedicalHistory from "./medicalHistory"; // Assuming MedicalHistory is in the same directory
import Login from "./login";
import { KeyringPair } from "@polkadot/keyring/types";

const Home: NextPage = () => {
  const { address } = useAccount();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 12,
        }}
      >
        {address}
        <ConnectButton />
      </div>
      {/* {address && <MedicalHistory account={{ address }} />} */}
      <Login setAccount={function (account: KeyringPair): void {
        throw new Error("Function not implemented.");
      } }/>
    </div>
  );
};

export default Home;
