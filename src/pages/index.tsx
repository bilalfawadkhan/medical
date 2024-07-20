import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import {useAccount} from 'wagmi';
import Login from './login';

const Home: NextPage = () => {
  const { address } = useAccount();
  return (
    <div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      {address}
      <ConnectButton />
      
    </div>
    <Login setAccount={() => {}} />

    </div>
  
  );
};

export default Home;
