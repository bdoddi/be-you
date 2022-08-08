import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  justify-content: space-between;
  grid-gap: 30px;
  align-items: center;
  padding: 10px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10000;
  background: ${theme.cream};

  height: 100px;
  color: ${theme.navyBlue};
  text-align: center;
  box-shadow: 2px 2px 4px 4px ${theme.skyBlue};

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, auto);
    .desktop-header {
      display: none;
    }
  }
`;

export const MobileHeaderContainer = styled.div<any>`
  align-items: right;
  padding: 30px;
  position: sticky;
  top: -20px;
  left: 1400px;
  height: 100%;
  width: 100%;
  z-index: 10000;
  background: ${theme.cream};
  color: ${theme.navyBlue};
  text-align: center;
  box-shadow: 2px 2px 4px 4px ${theme.skyBlue};

  ${(props) => (props.click ? "display : none" : "display: block")};

  div {
    padding: 20px;
  }
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  font-family: cursive;
  font-size: 60px;
  font-weight: 800;
  :hover {
    text-shadow: 5px 5px 10px 10px ${theme.black};
    color: ${theme.black};
  }
`;

export const Navtab = styled.div`
  cursor: pointer;
  font-size: 25px;
  font-weight: 600;
  :hover {
    color: ${theme.black};
    font-family: cursive;
  }
`;

export const clickSpan = css<any>`
  span {
    background: ${theme.navyBlue};
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    transition: all linear 0.3s;
    :nth-child(1) {
      top: 0;
    }
    :nth-child(2) {
      top: 43%;
    }
    :nth-child(3) {
      bottom: 0px;
    }
  }
`;
export const unClickedSpan = css<any>`
  span {
    background: ${theme.navyBlue};
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    transition: all linear 0.3s;
    :nth-child(1) {
      top: 0px;
      transform: rotate(-45deg) translate(-10px, 7px);
    }
    :nth-child(2) {
      top: 43%;
      transform: rotate(45deg) translate(0px, 2px);
    }
    :nth-child(3) {
      display: none;
    }
  }
`;
export const HeaderListIcon = styled.div<any>`
  @media (max-width: 1400px) {
    caret-color: transparent;
    height: 25px;
    cursor: pointer;
    position: relative;
    width: 30px;
    transition: all linear 0.2s;
    ${(props) => (props.click ? clickSpan : unClickedSpan)}
  }
`;
