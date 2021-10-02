import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <image
        width="80"
        height="80"
        href="/images/Ticket.png"
      />
    </Svg>
  );
};

export default Icon;
