import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 30px;
  align-items: center;
  padding: 10px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10000;
  background: ${theme.cream};
  box-shadow: ${theme.lightCream};
  height: 100px;
  color: ${theme.navyBlue};
  text-align: center;
  overflow
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  font-family: cursive;
  font-size: 60px;
  font-weight: 800;
  :hover {
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
