import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
  currentLang: string;
}

const AccountModal: React.FC<Props> = ({
  account,
  logout,
  onDismiss = () => null,
  currentLang,
}) => (
  <Modal
    title={currentLang === "en" ? "Your wallet" : "Tu wallet"}
    onDismiss={onDismiss}
  >
    <Text
      fontSize="20px"
      bold
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        marginBottom: "8px",
      }}
    >
      {account}
    </Text>
    <Flex mb="32px">
      <LinkExternal
        small
        href={`https://bscscan.com/address/${account}`}
        mr="16px"
      >
        {currentLang === "en" ? "View on BscScan" : "Ver en BscScan"}
      </LinkExternal>
      <CopyToClipboard toCopy={account}>
        {currentLang === "en" ? "Copy Address" : "Copiar dirección"}
      </CopyToClipboard>
    </Flex>
    <Flex justifyContent="center">
      <Button
        scale="sm"
        variant="secondary"
        onClick={() => {
          logout();
          window.localStorage.removeItem(connectorLocalStorageKey);
          onDismiss();
        }}
      >
        {currentLang === "en" ? "Logout" : "Cerrar sesión"}
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;
