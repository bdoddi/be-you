import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
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
