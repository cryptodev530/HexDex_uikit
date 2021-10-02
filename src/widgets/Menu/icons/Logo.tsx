/**
 * @description Desktop Logo
 */
import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 160 40" {...props}>
      <image
        width="160"
        height="40"
        href={
          isDark
            ? "/images/hexdex5.png"
            : "/images/hexdex5.png"
        }
      />
    </Svg>
  );
};

export default Logo;
