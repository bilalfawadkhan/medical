import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import MedicalHistory from "./medicalHistory"; // Assuming MedicalHistory is in the same directory

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
      {address && <MedicalHistory account={{ address }} />}
    </div>
  );
};

export default Home;
