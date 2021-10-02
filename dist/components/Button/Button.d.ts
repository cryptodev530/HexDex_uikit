import React from "react";
import { ButtonProps } from "./types";
declare const Button: {
    <E extends React.ElementType<any> = "button">(props: ButtonProps<E>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "primary";
        scale: "sm";
        disabled: boolean;
        fullWidth: boolean;
    };
};
export default Button;
