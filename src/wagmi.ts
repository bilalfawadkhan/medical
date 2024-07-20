import { getDefaultConfig, Chain } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

const moonbasealpha = {
  id: 1287,
  name: 'Moonbase Alpha',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/31208.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Develop', symbol: 'DEV', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.testnet.moonbeam.network'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'http://localhost' },
  },
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: 'PolkaMedicalSystem',
  projectId: 'POLKAMedical',
  chains: [
    moonbasealpha,
    /*polygon,
    optimism,
    arbitrum,
    base,*/
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});