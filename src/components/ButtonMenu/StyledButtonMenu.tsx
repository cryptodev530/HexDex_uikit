import styled, { DefaultTheme } from "styled-components";
import { Variant, variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variant;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const StyledButtonMenu = styled.div<{ variant: Variant }>`
  border-radius: 0 16px;
  display: inline-flex;

  & > button + button,
  & > a + a {
    margin-left: 15px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
