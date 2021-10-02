import React, { useState, useEffect, useRef } from "react";
import styled, { DefaultTheme } from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import Panel from "./Panel";
import { SvgProps } from "../../components/Svg";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT } from "./config";
import Avatar from "./Avatar";
import PanelBody from "./PanelBody";
import Button from "../../components/Button/Button";
import * as IconModule from "./icons";
import Text from "../../components/Text/Text";
import Dropdown from "../../components/Dropdown/Dropdown";
import MenuButton from "./MenuButton";
import MenuLink from "./MenuLink";

export interface Props {
  isActive?: boolean;
  theme: DefaultTheme;
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SubNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  align-items: center;
  padding: 2px 5px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 8px 16px;
  }
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const ConnectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const StyledLinkContainer = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
    display: flex;
  }
`;

const StyledNavLink = styled.div<Props>`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  cursor: pointer;
  color: ${({ isActive, theme }) => (isActive ? `${theme.colors.primary}` : "#c8c8c8")};

  &:hover {
    color: #eee;
  }

  &:active {
    color: ${({ theme }) => `${theme.colors.primary}`};
  }
`;

// const SocialEntry = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 16px;
// `;

// const PriceLink = styled.a`
//   display: flex;
//   align-items: center;
//   svg {
//     transition: transform 0.3s;
//   }
//   :hover {
//     svg {
//       transform: scale(1.2);
//     }
//   }
// `;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  priceLink,
  profile,
  children,
}) => {
  const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };
  const { MoonIcon, SunIcon } = Icons;
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage =
        window.document.body.clientHeight ===
        currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <SubNavContainer>
          <ConnectContainer>
            {/** Left side */}
            <Logo
              isPushed={isPushed}
              togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
              isDark={isDark}
              href={homeLink?.href ?? "/"}
            />
            <StyledLinkContainer>
              {
                links.map(entry => {
                  return (
                    <StyledNavLink key={entry.href} isActive={entry.href === location.pathname}>
                      <MenuLink style={{ width: 'max-content'}} href={entry.href}>
                        <div style={{display: 'flex', margin: 'auo'}}>
                          <div style={{margin: 'auto', marginLeft: '5px'}}>{entry.label}</div>
                        </div>
                      </MenuLink>
                    </StyledNavLink>
                  )
                })
              }
            </StyledLinkContainer>
            {/* <Flex>
              <PanelBody
                isPushed={true}
                isMobile={isMobile}
                isDark={isDark}
                toggleTheme={toggleTheme}
                langs={langs}
                setLang={setLang}
                currentLang={currentLang}
                cakePriceUsd={cakePriceUsd}
                pushNav={setIsPushed}
                links={links}
                priceLink={priceLink}
              />
            </Flex> */}
          </ConnectContainer>
          {/** Right side */}
          <ConnectContainer>
            {/** Price side */}
            <Text color="textSubtle" mx={10} bold>{`$${
              cakePriceUsd ? cakePriceUsd.toFixed(4) : 0
            }`}</Text>

            {/** Theme Switch side */}
            {/* <Button variant="text" mx={3} onClick={() => toggleTheme(!isDark)}> */}
              {/* alignItems center is a Safari fix */}
              {/* <Flex alignItems="center">
                {isDark ? (
                  <SunIcon
                    color={isDark ? "textDisabled" : "text"}
                    width="24px"
                  />
                ) : (
                  <MoonIcon
                    color={isDark ? "text" : "textDisabled"}
                    width="24px"
                  />
                )}
              </Flex>
            </Button> */}

            {/** Profile side */}
            <UserBlock
              currentLang={currentLang}
              account={account}
              login={login}
              logout={logout}
            />
            {/* {profile && <Avatar profile={profile} />} */}

            {/** Langs side */}
            <Dropdown
              id="langs-container"
              position="top-right"
              target={
                <Button mx={0} variant="text">
                  <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
                </Button>
              }
            >
              {langs.map((lang) => (
                <MenuButton
                  key={lang.code}
                  fullWidth
                  onClick={() => {
                    setLang(lang);
                  }}
                  // Safari fix
                  style={{ minHeight: "32px", height: "auto" }}
                >
                  {lang.language}
                </MenuButton>
              ))}
            </Dropdown>
          </ConnectContainer>
        </SubNavContainer>
      </StyledNav>

      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
          priceLink={priceLink}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay
          show={isPushed}
          onClick={() => setIsPushed(false)}
          role="presentation"
        />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
