import React from "react";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
  currentLang: string;
}

const ConnectModal: React.FC<Props> = ({
  login,
  onDismiss = () => null,
  currentLang,
}) => (
  <Modal
    title={
      currentLang === "en" ? "Connect to a wallet" : "Conectarse a una Wallet"
    }
    onDismiss={onDismiss}
  >
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
  </Modal>
);

export default ConnectModal;
