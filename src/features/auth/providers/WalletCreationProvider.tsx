import React, {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { generateSeedPhrase as generateSeedPhraseUtil } from '@utils/crypto';

export interface WalletCreationContextValue {
  password: string | null;
  seedPhrase: string[] | null;
  setPassword: (password: string) => void;
  generateSeedPhrase: () => void;
}

export const WalletCreationContext = createContext<WalletCreationContextValue>({
  password: null,
  seedPhrase: null,
  setPassword: () => {},
  generateSeedPhrase: () => {},
});

const WalletCreationProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [password, setPassword] = useState<string | null>(null);
  const [seedPhrase, setSeedPhrase] = useState<string[] | null>(null);

  const handleSetNewPassword = useCallback((newPassword: string) => {
    setPassword(newPassword);
    setSeedPhrase(null);
  }, []);

  const handleGenerateSeedPhrase = useCallback(
    () => setSeedPhrase(generateSeedPhraseUtil()),
    [],
  );

  const initialContextValue = useMemo<WalletCreationContextValue>(
    () => ({
      password,
      seedPhrase,
      setPassword: handleSetNewPassword,
      generateSeedPhrase: handleGenerateSeedPhrase,
    }),
    [password, seedPhrase, handleSetNewPassword, handleGenerateSeedPhrase],
  );

  return (
    <WalletCreationContext.Provider value={initialContextValue}>
      {children}
    </WalletCreationContext.Provider>
  );
};

export default WalletCreationProvider;
