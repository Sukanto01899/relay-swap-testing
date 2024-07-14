import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { RelayKitProvider } from '@reservoir0x/relay-kit-ui';
import '@reservoir0x/relay-kit-ui/styles.css';
import { convertViemChainToRelayChain } from '@reservoir0x/relay-sdk';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet } from "viem/chains";
import { WagmiProvider } from 'wagmi';
import SwapPage from './SwapPage';

const queryClient = new QueryClient()

const chains = [convertViemChainToRelayChain(mainnet)]

const wagmiConfig = getDefaultConfig({
  appName: 'Relay Demo',
  projectId: "3da1825ca5485c9e24e0642fa24e4bf6",
  chains: [mainnet]
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RelayKitProvider options={{
          appName: 'Relay Demo',
          appFees: [
            {
              recipient: '0x0000000000000000000000000000000000000000',
              fee: '100' // 1%
            }
          ],
          duneApiKey: "80IezEFHdjYvgpBqBdqSw61xwNV9TkhM",
          chains
        }}>
        <WagmiProvider config={wagmiConfig}>
          <SwapPage/>
        </WagmiProvider>
      </RelayKitProvider>
    </QueryClientProvider>
  )
}

export default App
