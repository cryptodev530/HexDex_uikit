import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  currentLang: string;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({
  account,
  login,
  logout,
  currentLang,
}) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    account,
    currentLang
  );
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;

  return account ? (
    <Button
      size="sm"
      variant="tertiary"
      onClick={() => {
        onPresentAccountModal();
      }}
    >
      {accountEllipsis}
    </Button>
  ) : (
    <Button
      size="sm"
      onClick={() => {
        onPresentConnectModal();
      }}
    >
      {currentLang === "en" ? "Connect" : "Conectar"}
    </Button>
  );
};

export default UserBlock;
