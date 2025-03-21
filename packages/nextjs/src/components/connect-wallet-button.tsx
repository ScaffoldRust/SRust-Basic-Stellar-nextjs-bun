'use client';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/components/auth/hooks/useWallet.hook';
import { useGlobalAuthenticationStore } from '@/components/auth/store/data';
import styles from './styles/connect-wallet-button.module.css';

export function ConnectWalletButton() {
  const { handleConnect, handleDisconnect } = useWallet();
  const address = useGlobalAuthenticationStore((state) => state.address);

  return (
    <Button
      className={`${styles.gradientButton} text-white font-bold px-6 py-2 rounded-lg transition-all duration-300`}
      onClick={address ? handleDisconnect : handleConnect}
    >
      {address ? 'Disconnect Wallet' : 'Connect Wallet'}
    </Button>
  );
}
