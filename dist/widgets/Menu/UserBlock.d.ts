import React from "react";
import { Login } from "../WalletModal/types";
interface Props {
    account?: string;
    login: Login;
    currentLang: string;
    logout: () => void;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
